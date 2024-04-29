import { cleanEnv } from 'envalid';
import { str, port } from 'envalid/dist/validators';
import path from 'path';
import { config } from 'dotenv';

const environment = process.env.NODE_ENV || 'development';

config({
  path: path.join(__dirname, `../../${environment}.env`),
});

const env = cleanEnv(process.env, {
  MONGO_DB_URI: str(),
  NODE_ENV: str(),
  PORT: port(),
});

export default env;
