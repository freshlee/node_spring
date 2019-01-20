import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());  
app.use(bodyParser.json());
app.listen(8080)
export default class BaseController {
    static app () {
        return app
    }
    constructor(params) {
    }
}