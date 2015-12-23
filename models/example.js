/**
    Keep this as a tempalte and for testing(`../test/model.js`)

    Properties instantiated by baseMode:
        + this.models (all models)
        + this.connection (rethinkdb connection)
        + this.modelName (filename without the extension/rethink table name)

    See `rethink_base_model.js` for methods exposed (i.e. CRUD)
*/

var BaseModel = require('../lib/rethink_base_model');
var baseModel = new BaseModel;

module.exports = function(app){

    baseModel.extend(this, app, __filename);

    // defines the rethink indexes
    this.indexes = ['mostRecent', {compound_index: ['field_one', 'field_two']}];

    return this;
}