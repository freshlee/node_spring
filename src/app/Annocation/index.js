import BaseController from '../Controller/BaseController'
export default {
    GetMapping: function (value) {
        return function (target, key, descriptor) {
            BaseController.app().get(value, (req, resoponse) => {
                console.log(target)
                target[key](req, resoponse).then(res => {
                    resoponse.header("Access-Control-Allow-Origin", "*");
                    resoponse.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                    resoponse.header("Access-Control-Allow-Credentials", "true");
                    resoponse.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    resoponse.send(res)   
                })          
            })
            return descriptor
        }
    },
    PostMapping: function (value) {
        return function (target, key, descriptor) {
            BaseController.app().post(value, (req, resoponse) => {
                console.log(target)
                target[key](req, resoponse).then(res => {
                    resoponse.header("Access-Control-Allow-Origin", "*");
                    resoponse.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                    resoponse.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    resoponse.send(res)   
                })       
            })
            return descriptor;
        }
    }
}