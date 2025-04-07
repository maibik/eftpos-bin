const { isEftpos, getCardTypeByBin } = require('./index');

describe('isEftpos', () => {
  test('should return true for valid 8-digit eftpos BIN', () => {
    expect(isEftpos('40060900')).toBe(true);
  });

  test('should return true for valid 6-digit eftpos BIN', () => {
    expect(isEftpos('400609')).toBe(true);
  });

  test('should return false for non-eftpos BIN', () => {
    expect(isEftpos('123456')).toBe(false);
  });

  test('should handle string input', () => {
    expect(isEftpos('400609')).toBe(true);
  });

  test('should handle number input', () => {
    expect(isEftpos(400609)).toBe(true);
  });

  test('should handle BINs longer than 8 digits', () => {
    expect(isEftpos('400609001234')).toBe(true);
  });
});

describe('getCardTypeByBin', () => {
  test('should return correct card type for valid eftpos BIN', () => {
    expect(getCardTypeByBin('400609')).toBe('debit');
  });

  test('should return "not_eftpos_card" for non-eftpos BIN', () => {
    expect(getCardTypeByBin('123456')).toBe('not_eftpos_card');
  });

  test('should handle 8-digit BIN', () => {
    expect(getCardTypeByBin('40060900')).toBe('debit');
  });

  test('should handle BINs longer than 8 digits', () => {
    expect(getCardTypeByBin('400609001234')).toBe('debit');
  });
}); 