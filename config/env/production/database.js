module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URI", "mongodb+srv://singgih:2n70Qzm5QRIi55NR@cluster0.0f07xke.mongodb.net/?retryWrites=true&w=majority"),
      },
      options: {
        ssl: true,
      },
    },
  },
});
