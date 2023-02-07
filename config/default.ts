require("dotenv").config();
export default {
  mongoUrl: process.env.DATABASE_URL,
  port: process.env.PORT,
};
