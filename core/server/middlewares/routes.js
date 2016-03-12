/**
 * 路由解析
 */

import { readdir } from 'fs';
import { join } from 'path';

import compose from 'koa-compose';
import route from 'koa-route';

const routes = [];

readdir(join(__dirname, '../controllers'), (error, controllers) => {
  if (error) return false;

  controllers.filter(c => c.endsWith('.js')).forEach((item) => {
    const controller = require(join(__dirname, '../controllers/', item));
    for (let key in controller) {
      let action = controller[key];
      routes.push(route[action.method.toLowerCase()](action.url, action.handler));
    }
  });
});

export default () => compose(routes);
