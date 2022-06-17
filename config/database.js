module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",

      // local mongodb

      //local pass: SuperUser1
      // settings: {
      //   host: env('DATABASE_HOST', '127.0.0.1'),
      //   srv: env.bool('DATABASE_SRV', false),
      //   port: env.int('DATABASE_PORT', 27017),
      //   database: env('DATABASE_NAME', 'backhead'),
      //   username: env('DATABASE_USERNAME', null),
      //   password: env('DATABASE_PASSWORD', null),
      // },

      //mongodb atlas
      settings: {
        uri: env(
          "DATABASE_URI",
          "mongodb+srv://singgih:2n70Qzm5QRIi55NR@cluster0.0f07xke.mongodb.net/?retryWrites=true&w=majority"
        ),
      },
      options: {
        // authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        // ssl: env.bool("DATABASE_SSL", false),
        ssl: true
      },
    },
  },
});
