import dotenv from "dotenv";

// Loads the .env file from the root directory
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  db: {
    storage: process.env.DB_STORAGE || "",
  },
};
