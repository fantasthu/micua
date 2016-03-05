import fs from 'fs';
import path from 'path';

exports.index = {
  url: '/',
  method: 'get',
  handler: async(ctx) => {
    // let n = ctx.session.views || 0;
    // ctx.session.views = ++n;
    // ctx.body = {
    //   name: 'zhangsan',
    //   id: n
    // };
    console.log(111);
    await ctx.render('index', {
      title: 'koa-hbs'
    });
  }
};

exports.index2 = {
  url: '/:name/:id',
  method: 'get',
  handler: (ctx) => {
    ctx.body = fs.createReadStream('1111');
  }
};


exports.demo = {
  url: '/demo',
  method: 'get',
  handler: (ctx) => {
    ctx.body = fs.createReadStream(path.join(__dirname, '../../content/anular.js'));
    ctx.type = 'application/javascript';
  }
};
