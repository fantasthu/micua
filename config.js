import {
  join
} from 'path';

const config = {
  // ### Development **(default)**
  development: {
    url: 'http://localhost:2080',

    // #### Email
    mail: {
      transport: 'SMTP',
      options: {
        "host": "smtp.exmail.qq.com",
        "port": 25,
        "secure": false,
        "name": "Hello Micua",
        "auth": {
          "user": "t1@wedn.net",
          "pass": "2014@itcast"
        }
      }
    },

    // #### Database
    database: {
      client: 'sqlite3',
      connection: {
        filename: join(__dirname, '/content/data/micua-dev.db')
      },
      debug: false
    },

    // #### Server
    // Can be host & port (default), or socket
    server: {
      host: '127.0.0.1',
      port: '2080'
    },

    // #### Paths
    paths: {
      content: join(__dirname, '/content/'),
      theme: join(__dirname, '/content/themes/'),
    },

    // #### Keys
    keys: {
      session: 'micua',
      cookie: 'micua'
    }
  },

  // ### Production
  production: {
    url: 'http://my-micua-blog.com',
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: join(__dirname, '/content/data/micua.db')
      },
      debug: false
    },

    server: {
      host: '127.0.0.1',
      port: '2368'
    }
  },


  // **Developers only need to edit below here**

  // ### Testing
  // Used when developing micua to run tests and check the health of micua
  // Uses a different port number
  testing: {
    url: 'http://127.0.0.1:2369',
    database: {
      client: 'sqlite3',
      connection: {
        filename: join(__dirname, '/content/data/micua-test.db')
      },
      pool: {
        afterCreate: function(conn, done) {
          conn.run('PRAGMA synchronous=OFF;' +
            'PRAGMA journal_mode=MEMORY;' +
            'PRAGMA locking_mode=EXCLUSIVE;' +
            'BEGIN EXCLUSIVE; COMMIT;', done);
        }
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    },
    logging: false
  },

  // ### Testing MySQL
  // Used by Travis - Automated testing run through GitHub
  'testing-mysql': {
    url: 'http://127.0.0.1:2369',
    database: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'micua_testing',
        charset: 'utf8'
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    },
    logging: false
  }
};

export default config;
