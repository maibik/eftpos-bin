const binList = require("./binList.js");

function isEftpos(bin) {
  bin = Number(bin.toString().substring(0, 8));  // Ensure bin is 8 digits
  console.log('binbin', bin);
  return bin in binList || Number(bin.toString().substring(0, 6)) in binList;
}

function getCardTypeByBin(bin) {
  const eightDigitBin = Number(bin.toString().substring(0, 8));
  const sixDigitBin = Number(bin.toString().substring(0, 6));
  
  if (eightDigitBin in binList) {
    return binList[eightDigitBin].type;
  }
  if (sixDigitBin in binList) {
    return binList[sixDigitBin].type;
  }
  return "not_eftpos_card";
}

module.exports = { isEftpos, getCardTypeByBin };