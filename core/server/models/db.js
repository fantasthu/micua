import knex from 'knex';
import bookshelf from 'bookshelf';

import config from '../../../config';

const options = config[process.env.NODE_ENV].database;

export default bookshelf(knex(options));
