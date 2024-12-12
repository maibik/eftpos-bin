# Australian domestic card scheme checker

BIN list last updated:  25 November 2024.

### Install
npm install eftpos-bin

### Example
const EftposBin = require('eftpos-bin');

console.log(EftposBin.isEftpos(415436)); // true

console.log(EftposBin.getCardTypeByBin(415436)); // debit