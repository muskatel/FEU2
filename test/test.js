var assert = require('assert');
require('../app.js');

describe('App.js', function() {
  describe('my_test function', function() {

    it('2 should equal 2', function() {
      assert.equal(my_test(2,2),  5);
  		});
      
  });
});
