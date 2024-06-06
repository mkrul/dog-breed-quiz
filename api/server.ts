import env from "./src/util/validateEnv";
import app from "./src/app";
import db from "./db/conn";

(async () => {
  const port = env.PORT;

  try {
    app.listen(port, () => {
      db.on("error", console.error.bind(console, "connection error:"));
      db.on("connected", function () {
        console.log("Connected to MongoDB");
      });
      console.log(`Server started at ${env.DOMAIN_URL}:${port}`);
    });
  } catch (err) {
    const error = new Error("Request failed");
    console.log(err);
    throw error;
  } finally {
    console.log("Server started");
  }
})();
