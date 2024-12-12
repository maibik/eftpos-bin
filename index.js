const binList = require("./binList.js");

function isEftpos(bin) {
    return bin in binList;
}
  
function getCardTypeByBin(bin) {
  if (isEftpos(bin))
    return binList[bin].type;
  else
   return "not_eftpos_card";
}

module.exports = {isEftpos, getCardTypeByBin};