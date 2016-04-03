var assert = require('assert');

describe('Utilities', function() {
  let utils = require('../core/common/utils');
  describe('#merge', function() {
    it('合并多个对象', function() {
      JSON.stringify({ id: 1, name: '张三', age: 19, gender: true })
        .should.equal(JSON.stringify(utils.merge(
          { id: 1 },
          { name: '张三', age: 19 },
          { gender: true }
        )));
    });
  });
});
