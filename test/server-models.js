const assert = require('assert');

describe('models', function() {
  describe('#db', function() {
    const db = require('../core/server/models/db');
    it('连接数据库成功', function() {
      // console.log(db);
    });
  });

  describe('#user', function() {
    const user = require('../core/server/models/user');
    it('连接数据库成功', function() {
      console.log(user.default);
    });
  });
});
