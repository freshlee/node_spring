'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _UserService = require('../Service/UserService');

var _UserService2 = _interopRequireDefault(_UserService);

var _Annocation = require('../Annocation');

var _Annocation2 = _interopRequireDefault(_Annocation);

var _BaseController2 = require('./BaseController');

var _BaseController3 = _interopRequireDefault(_BaseController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var GetMapping = _Annocation2.default.GetMapping,
    PostMapping = _Annocation2.default.PostMapping;

var service = new _UserService2.default();
var LoginController = (_dec = PostMapping('/user/login'), _dec2 = GetMapping('/user'), _dec3 = GetMapping('/routes'), (_class = function (_BaseController) {
    _inherits(LoginController, _BaseController);

    function LoginController() {
        var _ref;

        _classCallCheck(this, LoginController);

        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = LoginController.__proto__ || Object.getPrototypeOf(LoginController)).call.apply(_ref, [this].concat(params)));
    }

    _createClass(LoginController, [{
        key: 'init',
        value: function init(req, resoponse) {
            return new Promise(function (resolve) {
                var now = new Date();
                resoponse.cookie('token', JSON.stringify({ id: '213123', deadline: now.getTime() }), {
                    maxAge: 900000,
                    httpOnly: true
                });
                resolve({ success: true, message: 'Ok' });
            });
        }
    }, {
        key: 'userInfo',
        value: function userInfo(req) {
            return new Promise(function (resolve) {
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
                });
            });
        }
    }, {
        key: 'getRoute',
        value: function getRoute(req) {
            return new Promise(function (resolve) {
                resolve({
                    success: true,
                    list: [{
                        id: '45',
                        name: 'overTime',
                        zhName: 'overTime',
                        icon: 'edit',
                        route: '/overTime'
                    }]
                });
            });
        }
    }]);

    return LoginController;
}(_BaseController3.default), (_applyDecoratedDescriptor(_class.prototype, 'init', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'init'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'userInfo', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'userInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getRoute', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'getRoute'), _class.prototype)), _class));
exports.default = LoginController;
//# sourceMappingURL=loginContoller.js.map