import express from 'express'
import bodyParser from 'body-parser'
import Sevice from '../Service/UserService'
import BaseController from './BaseController'
const service = new Sevice()
// const app = express()
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.listen(8080)
function GetMapping (value) {
    return function (target, key, descriptor) {
        BaseController.app().get(value, (req, res) => {
            console.log(target)
            res.send(target[key](req))          
        })
        return descriptor
    }
}
function PostMapping (value) {
    return function (target, key, descriptor) {
        BaseController.app().post(value, (req, resoponse) => {
            console.log(target)
            target[key](req).then(res => {
                resoponse.send(res)   
            })       
        })
        return descriptor;
    }
}
export default class LoginController extends BaseController {
    constructor(...params) {
        super(...params)
    }
    @GetMapping('/login')
    init (req) {
        console.log(req.query)
        return req.query
    }
}