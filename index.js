const binList = require("./binList.js");

function IsEftpos(bin) {
    return bin in binList;
  }
  
  module.exports = IsEftpos;