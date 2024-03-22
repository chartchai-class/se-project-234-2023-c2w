import * as dotenv from "dotenv";
dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, PORT, PORT_ADMIN, PORT_USER } = process.env;

export { DB_HOST, DB_USER, DB_PASS, DB_NAME, PORT, PORT_ADMIN, PORT_USER };

