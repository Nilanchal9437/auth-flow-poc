const config = {
  PORT: process.env.PORT || 8080,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,

  // REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  // REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,

  // RESET_CODE_SECRET: process.env.RESET_CODE_SECRET,
  // RESET_CODE_EXPIRY: process.env.RESET_CODE_EXPIRY,

  DATABASE: process.env.MONGODB_URL,

  // REDIS_HOST_NAME: process.env.REDIS_HOST_NAME || "",
  // REDIS_PASSWORD: process.env.REDIS_PASSWORD || "",
  // REDIS_PORT: process.env.REDIS_PORT || "",
  // REDIS_USERNAME: process.env.REDIS_USERNAME || "",

  // UPSTASH: {
  //   UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  //   UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  // },
};

global.AppConfig = config;

module.exports = { ...config };
