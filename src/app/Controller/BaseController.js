import express from 'express'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen(8080)
export default class BaseController {
    static app () {
        return app
    }
    constructor(params) {
    }
}