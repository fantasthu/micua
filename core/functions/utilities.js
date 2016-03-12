/**
 * 合并多个对象成员
 * @param  {Array} obj2 需要合并的对象
 * @return {Object}      合并过后的对象
 */
exports.merge = function(...objs) {
  let res = {};
  for (let obj of objs) {
    for (let key in obj) {
      // if (!res.hasOwnProperty(key))
      res[key] = obj[key];
    }
  }
  return res;
};
