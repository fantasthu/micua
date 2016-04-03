// 中间件操作入口

import {
  join
} from 'path';
import {
  Z_SYNC_FLUSH
} from 'zlib';

import co from 'co';
import compose from 'koa-compose';
import convert from 'koa-convert';
import logger from 'koa-logger';
import compress from 'koa-compress';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';

import views from './views';
import routes from './routes';
import headers from './headers';

export default (app, options) => {

  let middlewares = [];

  // 开发模式时记录日志
  process.env.NODE_ENV === 'development' && middlewares.push(logger());

  // 压缩响应流处理
  middlewares.push(compress({
    filter: type => !/image/i.test(type),
    threshold: 1024 * 50,
    flush: Z_SYNC_FLUSH
  }));

  // 自定义响应头
  middlewares.push(headers());

  // 静态文件请求处理
  /* beautify ignore:start */
  middlewares.push(serve(options.paths.content, { maxage: 7 * 24 * 60 * 60 * 1000 }));
  /* beautify ignore:end */

  // 请求体格式化处理
  middlewares.push(bodyParser());

  // 会话支持
  middlewares.push(session(app));

  // 视图模板引擎
  middlewares.push(views(options));

  // 自动化路由
  middlewares.push(routes());


  // 转换部分Generator Function Middlewares
  let results = [];
  middlewares.forEach(middleware => {
    results.push(convert(middleware));
  });

  return compose(results);
};
