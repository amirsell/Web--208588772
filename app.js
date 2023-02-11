import express from 'express';
import cors from 'cors';
import * as url from "url";
import { serverConfig, generalConfig } from './config/index.js'
import apiRouter from './routes/index.js';
import logger from './utils/logger.js';
import { checkDbConnection } from './db/db.js';

const { servicePort } = serverConfig
const { nodeEnv } = generalConfig

const app = express();
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

checkDbConnection()

if (nodeEnv === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '200mb' }));
app.use(cors({
  origin: '*'
}));


app.use(express.static(__dirname + "/client"));
app.use("/css", express.static(__dirname + "/client/css"));
app.use("/img", express.static(__dirname + "/client/img"));
app.use("/js", express.static(__dirname + "/client/js"));
app.use('/api', apiRouter);

app.listen(servicePort, () => logger.info(`Server is connected on ${servicePort}`))