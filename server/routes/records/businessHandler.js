// Businesslogik
const loadAllRecords = require('./dataAccess').loadAllRecords;
const builtRecordsDTO = require('../../utils/dtoUtil').recordsDTO;

class recordsHandler{

  constructor() {
  }

  getAllRecords() {
    console.log("in getAllRecords");

    var result = loadAllRecords();

    console.log("result: ", result);

    if(result.status === 0){
      result.status = 200;
      result.data = builtRecordsDTO(result.data);
      return result;
    } else {
      console.log("Error while loading records: ", result.message);
      result.status = 400;
      result.message = "Error while loading records.";
      return result;
    }
  }
}
module.exports = recordsHandler;
