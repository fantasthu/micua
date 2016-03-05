import server from './server';
// 处理环境变量
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// console.log(111);

const options = {};

server(options);
