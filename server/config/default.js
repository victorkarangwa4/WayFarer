import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV,

  databaseUrl: process.env.DATABASE_URL,
};

export default config;
