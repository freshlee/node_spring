"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseController = require("../Controller/BaseController");

var _BaseController2 = _interopRequireDefault(_BaseController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    GetMapping: function GetMapping(value) {
        return function (target, key, descriptor) {
            _BaseController2.default.app().get(value, function (req, resoponse) {
                console.log(target);
                target[key](req, resoponse).then(function (res) {
                    resoponse.header("Access-Control-Allow-Origin", "*");
                    resoponse.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                    resoponse.header("Access-Control-Allow-Credentials", "true");
                    resoponse.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    resoponse.send(res);
                });
            });
            return descriptor;
        };
    },
    PostMapping: function PostMapping(value) {
        return function (target, key, descriptor) {
            _BaseController2.default.app().post(value, function (req, resoponse) {
                console.log(target);
                target[key](req, resoponse).then(function (res) {
                    resoponse.header("Access-Control-Allow-Origin", "*");
                    resoponse.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                    resoponse.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    resoponse.send(res);
                });
            });
            return descriptor;
        };
    }
};
//# sourceMappingURL=index.js.map