/**
 * 视图引擎
 */

import co from 'co';
import compose from 'koa-compose';
import convert from 'koa-convert';
import json from 'koa-json';
// import hbs from 'koa-hbs';
import views from 'koa-views';

module.exports = (viewPath) => {

  let temp = [];

  // JSON Format
  temp.push(convert(json({
    pretty: false,
    param: 'pretty'
  })));

  // Template Engine
  temp.push(convert(views(viewPath, {
    extension: 'hbs',
    map: {
      hbs: 'handlebars',
      jade: 'jade',
      html: 'nunjucks',
    }
  })));

  // temp.push(convert(hbs.middleware({
  //   viewPath: path.join(__dirname, 'views')
  // })));

  // 模板引擎render方法适配
  temp.push(async(ctx, next) => {
    ctx.render = co.wrap(ctx.render.bind(ctx));
    await next();
  });

  return compose(temp);

};
