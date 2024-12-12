# eftpos-bin

### Install
npm install eftpos-bin

### Example
const EftposBin = require('eftpos-bin');

console.log(EftposBin.isEftpos(415436)); // true

console.log(EftposBin.getCardTypeByBin(415436)); // debit