import express from 'express'
import bodyParser from 'body-parser'
import Sevice from '../Service/UserService'
import Annocation from '../Annocation'
import BaseController from './BaseController'
const {GetMapping, PostMapping} = Annocation
const service = new Sevice()
export default class LoginController extends BaseController {
    constructor(...params) {
        super(...params)
    }
    @PostMapping('/user/login')
    init (req, resoponse) {
        return new Promise((resolve) => {
            let now = new Date()
            resoponse.cookie(
                'token',
                JSON.stringify({ id: '213123', deadline: now.getTime() }),
                {
                  maxAge: 900000,
                  httpOnly: true,
                }
              )
            resolve({ success: true, message: 'Ok' })
        })
    }
    @GetMapping('/user')
    userInfo (req) {
        return new Promise((resolve) => {
            resolve({
                success: true,
                user: {
                    id: '2435345',
                    username: 'lee',
                    nickName: 'lee',
                    phone: 15728468116,
                    age: 27,
                    address: 'china',
                    isMale: true,
                    email: 'aasdasdas@email',
                    createTime: '2019-01-19',
                    avatar: '',
                    permissions: {
                        role: 'admin'
                    }
                }
            })
        })
    }
    @GetMapping('/routes')
    getRoute (req) {
        return new Promise((resolve) => {
            resolve({
                success: true,
                list: [
                    {
                      id: '45',
                      name: 'overTime',
                      zhName: 'overTime',
                      icon: 'edit',
                      route: '/overTime',
                    }
                ]
            })
        })
    }
}