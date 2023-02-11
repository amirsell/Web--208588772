import * as mysql from "mysql";
import { dbConfig } from "../config/index.js";
import logger from "../utils/logger.js";

const conn = mysql.createConnection(dbConfig);

conn.connect();

export const execSqlQuery = async (query) => {
    return new Promise((resolve, reject) => {
        conn.query(query, function (error, res) {
            if (error !== null) {
                console.log(`error: ${error}`);
                reject(error);
            } else {
                console.log(`success: ${JSON.parse(JSON.stringify(res))}`);
                resolve(JSON.parse(JSON.stringify(res)));
            }
        });
    });
};

export const checkDbConnection = () => {
    conn.query("select 1", (error, res) => {
        if (error) {
            logger.error("Connection to database failed", error);
            throw error;
        }
        logger.info("Database is okay, connection succeded.");
    });
};
