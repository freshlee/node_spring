import express from 'express'
import bodyParser from 'body-parser'
import Sevice from '../Service'
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
    @PostMapping('/addOverTime')
    addOverTime (req) {
        console.log(req.body)
        return service.insertObj(req.body).then(res => {
            return {
                code: 200,
                msg: 'sucess'
            }
        })
    }
}