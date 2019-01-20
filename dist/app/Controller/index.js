'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _loginContoller = require('./loginContoller.js');

var _loginContoller2 = _interopRequireDefault(_loginContoller);

var _overTimeContoller = require('./overTimeContoller.js');

var _overTimeContoller2 = _interopRequireDefault(_overTimeContoller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
    _classCallCheck(this, App);

    var loginContoller = new _loginContoller2.default();
    var overTimeContoller = new _overTimeContoller2.default();
};

exports.default = App;
//# sourceMappingURL=index.js.map