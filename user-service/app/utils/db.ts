import { Client, ClientConfig } from "pg";

const config: ClientConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.PORT ? +process.env.PORT : 5432,
};

export const DBClient = () => {
  return new Client({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
    port: config.port,
  });
};
