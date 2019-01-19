'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseController = function BaseController(params) {
    _classCallCheck(this, BaseController);

    this.app = (0, _express2.default)();
    this.app.use(_bodyParser2.default.urlencoded({ extended: false }));
    this.app.use(_bodyParser2.default.json());
    this.app.listen(8080);
};

exports.default = BaseController;
//# sourceMappingURL=BasseController.js.map