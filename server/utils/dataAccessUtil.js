const MongoClient = require('mongodb').MongoClient;
const meanDB = require('../static/constants').MEAN_CONNECTION_URI;

var selectResult = {
    status: 0,
    data: [],
    message: null
};

function connection(closure) {
    return MongoClient.connect(meanDB, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

module.exports = { selectResult, connection };
