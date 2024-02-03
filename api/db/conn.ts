import env from "../src/util/validateEnv"
const { MongoClient } = require("mongodb");

const mongoUri = env.MONGO_URI;
const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db: any;

module.exports = {
  connectToServer: function (callback: any) {
    client.connect(function (err: any, db: any) {
      if (err) {
        console.error(err);
      }
      _db = db;
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  },
};
