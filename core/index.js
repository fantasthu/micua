process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import server from './server';

import utilities from './functions/utilities';

import packageJson from '../package.json';

import config from '../config';

const options = utilities.merge({
  name: packageJson.name,
  version: packageJson.version
}, config[process.env.NODE_ENV]);

server(options);
