const binList = require("./binList.js");

function IsEftpos(bin) {
    return bin in binList;
  }
  
module.exports = {IsEftpos};

console.log('IsEftpos: ' , IsEftpos(123123));