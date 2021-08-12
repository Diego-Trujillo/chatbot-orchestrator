import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';

export class BotRoutes extends CommonRoutesConfig {

    constructor(app: express.Application){
        super(app, 'BotRoutes');
    }

    configureRoutes(){
        return this.app;
    }

}