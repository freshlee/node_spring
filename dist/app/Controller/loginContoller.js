'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _UserService = require('../Service/UserService');

var _UserService2 = _interopRequireDefault(_UserService);

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

var service = new _UserService2.default();
// const app = express()
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.listen(8080)
function GetMapping(value) {
    return function (target, key, descriptor) {
        _BaseController3.default.app().get(value, function (req, res) {
            console.log(target);
            res.send(target[key](req));
        });
        return descriptor;
    };
}
function PostMapping(value) {
    return function (target, key, descriptor) {
        _BaseController3.default.app().post(value, function (req, resoponse) {
            console.log(target);
            target[key](req).then(function (res) {
                resoponse.send(res);
            });
        });
        return descriptor;
    };
}
var LoginController = (_dec = GetMapping('/login'), (_class = function (_BaseController) {
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
        value: function init(req) {
            console.log(req.query);
            return req.query;
        }
    }]);

    return LoginController;
}(_BaseController3.default), (_applyDecoratedDescriptor(_class.prototype, 'init', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'init'), _class.prototype)), _class));
exports.default = LoginController;
//# sourceMappingURL=loginContoller.js.map