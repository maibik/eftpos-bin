const binList = require("./binList.js");

function isEftpos(bin) {
  bin = Number(bin.toString().substring(0, 8));  // Ensure bin is 8 digits
  console.log('binbin', bin);
  return bin in binList || Number(bin.toString().substring(0, 6)) in binList;
}

function getCardTypeByBin(bin) {
  return isEftpos(bin) ? binList[bin].type : "not_eftpos_card";
}

module.exports = { isEftpos, getCardTypeByBin };