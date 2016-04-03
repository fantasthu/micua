import fs from 'fs';
import path from 'path';

exports.index = {
  url: '/',
  method: 'get',
  handler: async(ctx) => {
    await ctx.render('casper/index', {
      title: 'koa-hbs'
    });
    // ctx.body = 'hello';
  }
};
