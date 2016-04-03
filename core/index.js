process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import server from './server';

import packageJson from '../package.json';

import config from '../config';

const options = Object.assign({
  name: packageJson.name,
  version: packageJson.version
}, config[process.env.NODE_ENV]);

server(options);
