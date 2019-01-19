'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _app = (0, _express2.default)();
_app.use(_bodyParser2.default.urlencoded({ extended: false }));
_app.use(_bodyParser2.default.json());
_app.listen(8080);

var BaseController = function () {
    _createClass(BaseController, null, [{
        key: 'app',
        value: function app() {
            return _app;
        }
    }]);

    function BaseController(params) {
        _classCallCheck(this, BaseController);
    }

    return BaseController;
}();

exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map