export default () => async(ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  ctx.set('Server', 'Micua');
  ctx.set('X-Power-By', 'Micua');
  ctx.set('X-Response-Time', ms + 'ms');
};
