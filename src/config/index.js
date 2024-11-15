import { config } from "dotenv";
config();
const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "gabriel_28";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_DATABASE = process.env.DB_DATABASE || "mydatadb";
export { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE };
