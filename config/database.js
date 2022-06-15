const sqlite = {
  connector: "bookshelf",
  settings: {
    client: "sqlite",
    filename: ".tmp/data.db",
  },
  options: {
    // debug: true,
    useNullAsDefault: true,
  },
};

const postgres = {
  connector: "bookshelf",
  settings: {
    client: "postgres",
    database: "strapi",
    username: "strapi",
    password: "strapi",
    port: 5432,
    host: "localhost",
  },
  options: {},
};

const mysql = {
  connector: "bookshelf",
  settings: {
    client: "mysql",
    database: "strapi",
    username: "strapi",
    password: "strapi",
    port: 3306,
    host: "localhost",
  },
  options: {},
};

const mongo = {
  connector: "mongoose",
  settings: {
    database: "casio",
    username: "",
    password: "",
    port: 27017,
    host: "localhost",
  },
  options: {
    authenticationDatabase: null,
    ssl: false,
  },
};

const db = {
  mysql,
  sqlite,
  postgres,
  mongo,
};

// module.exports = {
//   defaultConnection: "default",

//   connections: {
//     /** local */
//     default: db.mongo,
//   },
// };

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      //mongodb atlas
      settings: {
        uri: env(
          "DATABASE_URI",
          "mongodb+srv://singgih:2n70Qzm5QRIi55NR@cluster0.0f07xke.mongodb.net/?retryWrites=true&w=majority"
        ),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  },
});
