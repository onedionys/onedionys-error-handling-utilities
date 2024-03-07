const assert = require('assert');
const { handleError } = require('../src/errorHandling');

describe('Error Handling Utilities', () => {
  describe('handleError()', () => {
    it('should return correct error message and status', () => {
      const error = new Error('Test Error');
      const result = handleError(error);
      assert.strictEqual(result.message, 'Test Error');
      assert.strictEqual(result.status, 'error');
    });
  });
});
