const { db } = require("../db/config");

// NODE_ENV :: test, production, dev
const mongodb = db({
    uri: "mongodb://127.0.0.1:27017",
    databaseName: "blazing",
});

module.exports = { mongodb };
