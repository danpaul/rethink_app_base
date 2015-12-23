## ABOUT

`rethink_app_base` is a minimal back end setup that provides minimal abstraction and dependencies(to suit to my personal taste) while providing a handful of features:
* an environment dependeant config block(see `./config.js`)
* models that automatically generate rethink tables and indexes, though the indexes are not auto-updating at preset.(see `./lib/rethink_schema_builder.js` and `./models/example.js`)
* a base model that is automatically extended and provides CRUD methods(see `./lib/rethink_base_model.js`)
* automatically name-spaced routes(see `./routes/example.js`)
* a template for testing(see `./test/index.js` and `./test/model.js`)

For documentation, read the source! It's really minimal and pretty easy to follow(start in `./index.js`).

## TO SETUP

Setup and start Rethink for your local system.
`npm install`

## TO RUN

Dev with Nodemon: NODE_ENV=development nodemon index.js
Dev without Nodemon: NODE_ENV=development node index.js
Prod: NODE_ENV=production node index.js