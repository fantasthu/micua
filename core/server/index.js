/**
 * 主服务模块，用于注册中间件，并启动监听
 */

import Koa from 'koa';

import onerror from 'koa-onerror';

import middlewares from './middlewares/';

export default (options) => {

  const app = new Koa();

  app.name = options.name;
  app.version = options.version;
  app.keys = options.keys.cookie;

  /**
   * 错误处理
   * https://github.com/koajs/onerror
   * https://github.com/koajs/error
   */
  if (app.env === 'development') {
    onerror(app);
  } else {
    onerror(app, {
      redirect: '/error.html'
    });
  }
  // 注入所有中间件
  app.use(middlewares(app, options));

  app.listen(options.server.port, options.server.host, (err) => {
    if(err) throw err;
    console.log(`server run @ http://${options.server.host}:${options.server.port}`);
  });
}
