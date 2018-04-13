// Rest Schnittstelle
const express = require('express');
const router = express.Router();

const businessHandler = require('./businessHandler');

// Get users
router.get('/records', (req, res) => {

  var recordsHandler = new businessHandler();

  recordsHandler.getAllRecords(handleSuccess, handleError);
});

function handleSuccess(result){
  res.json(result.data);
}
function handleError(result){
  res.status(result.status).json(result.message);
}

module.exports = router;
