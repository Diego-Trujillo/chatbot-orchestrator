import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';

import { CommonRoutesConfig } from './common/common.routes.config';
import { BotRoutes } from './bot/bot.routes.config';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = parseInt(process.env.PORT || '3000');
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

// Parse all requests as JSON.
app.use(express.json());

// Allow CORS
app.use(cors());

const logOptions: expressWinston.LoggerOptions = {
    transports: [ new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    )
}


if(!process.env.DEBUG) {
    logOptions.meta = false;
}

app.use(expressWinston.logger(logOptions));

routes.push(new BotRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200)
       .send("jasdoansoajndoasnd")
});


server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    console.log('asdasdasdasdasdad');
});