var _ = require('underscore');
var path = require('path');
var r = require('rethinkdb');

/**
    Should be extended.

    Exaple usage:

    var BaseModel = require('../lib/rethink_base_model');
    var baseModel = new BaseModel;

    module.exports = function(app){
        // app should have app.connection and app.models property
        baseModel.extend(this, app, __filename);
    }
*/
var base = function(){};

base.prototype.extend = function(child, app, filename){
    _.extend(child, this);
    child.models = app.models;
    child.connection = app.connection;
    child.name = path.basename(filename).replace(/\.[^/.]+$/, "");
}

/**
    callback(err, `obj`)
    callsback with obj id added to `obj` after creation
*/
base.prototype.create = function(obj, callback){
    r.table(this.name)
     .insert([obj])
     .run(this.connection, function(err, result){
        if( err ){
            callback(err);
        } else {
            obj.id = result.generated_keys[0];
            callback(null, obj);
        }
    })
}

/**
    callback(err, `obj`)
*/
base.prototype.get = function(id, callback){
    r.table(this.name).get(id).run(this.connection, callback);
}

/**
    required: options.id
*/
base.prototype.update = function(options, callback){
    r.table(this.name).get(options.id)
        .update(options)
        .run(this.connection, callback);
}

base.prototype.delete = function(id, callback){
    r.table(this.name).get(id)
        .delete()
        .run(this.connection, callback);
}

module.exports = base;