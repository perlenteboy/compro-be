const path = require('path');

// Local
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// Postgre GCP
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
        host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USER'),
        password: env('DATABASE_PASSWORD'),
    },
  },
});