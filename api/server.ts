import express from 'express';
import path from 'path';
import env from "./src/util/validateEnv";
import app from './src/app';


(async () => {
  const port = env.PORT;
  app.use(express.json());
  // get driver connection
  const dbo = require('./db/conn');

  try {
    app.listen(port, () => {
      //connect to db
      dbo.connectToServer(function (err: any) {
        if (err) console.error(err);
      });
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Server started');
  }
})()
