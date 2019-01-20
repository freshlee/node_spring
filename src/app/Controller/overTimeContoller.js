import express from 'express'
import bodyParser from 'body-parser'
import Sevice from '../Service'
import BaseController from './BaseController'
import Annocation from '../Annocation'
const {GetMapping, PostMapping} = Annocation
const service = new Sevice()
export default class LoginController extends BaseController {
    constructor(...params) {
        super(...params)
    }
    @PostMapping('/addOverTime')
    addOverTime (req) {
        console.log(req.body)
        const OverTime = {
            endDate: req.body.endDate,
            startDate: req.body.startDate,
            reason: req.body.reason,
            userId: req.body.userId
        }
        return service.insertObj(OverTime).then(res => {
            return {
                code: 200,
                msg: 'sucess'
            }
        })
    }
}