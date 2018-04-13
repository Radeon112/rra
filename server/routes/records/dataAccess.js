// Datenbank Abfragen
const connection = require('../../utils/dataAccessUtil').connection;
const selectResult = require('../../utils/dataAccessUtil').selectResult;
const records = require('../../static/constants').MEAN_RECORDS_COLLECTION;

function loadAllRecords() {
  console.log("in loadAllRecords");

  connection((db) => {
      db.collection(records)
          .find()
          .toArray()
          .then((data) => {
              console.log("data: ", data);
              selectResult.status = 0;
              selectResult.data = data;
              console.log("selectResult: ", selectResult);
              return selectResult;
          })
          .catch((err) => {
              selectResult.status = 1;
              selectResult.message = err;
              console.log("selectResult: ", selectResult);
              return selectResult;
          });
  });

}
module.exports = { loadAllRecords };
