import fs from 'fs';
import path from 'path';

import Koa from 'koa';
import convert from 'koa-convert';
import logger from 'koa-logger';
import onerror from 'koa-onerror';
import compress from 'koa-compress';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import json from 'koa-json';
import hbs from 'koa-hbs';
import route from 'koa-route';

export default (options) => {
  const app = new Koa();

  /**
   * 记录日志
   */
  if (process.env.NODE_ENV === 'development') {
    app.use(logger());
    onerror(app);
  } else {
    onerror(app, {
      redirect: '/error.html'
    });
  }

  /**
   * 压缩响应流
   */
  app.use(compress({
    filter: type => {
      // console.log(type);
      return !/image/i.test(type);
    },
    threshold: 1024 * 50,
    flush: require('zlib').Z_SYNC_FLUSH
  }));

  /**
   * 静态文件
   */
  app.use(convert(serve(path.join(__dirname, '../../content/'), {
    maxage: 7 * 24 * 60 * 60 * 1000
  })));

  /**
   * 解析请求体
   */
  app.use(bodyParser());

  /**
   * 会话支持
   */
  app.keys = ['micua'];
  app.use(convert(session(app)));

  /**
   * ViewResult
   */
  app.use(convert(json({
    pretty: false,
    param: 'pretty'
  })));
  app.use(convert(hbs.middleware({
    viewPath: path.join(__dirname, './views')
  })));

  app.use((ctx) => {
    // let n = ctx.session.views || 0;
    // ctx.session.views = ++n;
    // ctx.body = {
    //   name: 'zhangsan',
    //   id: n
    // };
    console.log(111);
    ctx.render('index', {
      title: 'koa-hbs'
    });
  });

  // /**
  //  * 路由解析
  //  */
  // fs.readdir(path.join(__dirname, './controllers'), (error, controllers) => {
  //   if (!error) {
  //     controllers.filter(c => c.endsWith('.js')).forEach((item) => {
  //       const controller = require(path.join(__dirname, './controllers/', item));
  //       for (let key in controller) {
  //         let action = controller[key];
  //         app.use(route[action.method.toLowerCase()](action.url, action.handler));
  //       }
  //     });
  //   }
  // });

  app.listen(3000, () => {
    console.log(`server run @ http://localhost:3000`);
  });
}
