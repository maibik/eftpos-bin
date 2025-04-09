# Australian domestic card scheme checker

Latest EFTPOS BIN table updates:  25 November 2024.

### Install
npm install eftpos-bin

### Example
const EftposBin = require('eftpos-bin');

console.log(EftposBin.isEftpos(415436)); // true

console.log(EftposBin.getCardTypeByBin(415436)); // debit

NOTE: If 8 digit BIN number is entered, it is going to check within 8 BIN numbers values, if not, cut it to 6 digit and try to find among 6 digit BINs.