import express from 'express'
const app = express();
import {router} from "./user/router";
import bodyParser from 'body-parser'
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.SERVER_PORT, () => {
    console.log('server is listening on port ', process.env.SERVER_PORT);
});