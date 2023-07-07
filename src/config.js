const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env');

dotenv.config({
  path: envPath,
});

module.exports = {
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  AWS_API_VERSION: process.env.AWS_API_VERSION,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  EMAIL_FROM: process.env.EMAIL_FROM
};
