<<<<<<< HEAD
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'db/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
=======
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', path.join(__dirname, '..', '.tmp/data.db')),
    },
    useNullAsDefault: true,
>>>>>>> 8a0cf8309f75fae57d0a32f612e2daa68d6943f8
  },
});
