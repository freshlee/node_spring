'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseDao = function () {
    function BaseDao() {
        _classCallCheck(this, BaseDao);

        this.connection = _mysql2.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'test'
        });
    }

    _createClass(BaseDao, [{
        key: 'insertObj',
        value: function insertObj(obj) {
            var _this = this;

            var keyList = [];
            var valueList = [];
            Object.entries(obj).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    item = _ref2[1];

                keyList.push(key);
                if (typeof item === 'string') {
                    valueList.push('\'' + item + '\'');
                } else if (typeof item === 'number') {
                    valueList.push(item);
                } else {
                    return;
                }
            });
            console.log('INSERT INTO ' + this.tableName + ' (' + keyList.join(',') + ') VALUES(' + valueList.join(',') + ');');
            return new Promise(function (resolve, reject) {
                _this.connection.query('INSERT INTO overtime_record (' + keyList.join(',') + ') VALUES(' + valueList.join(',') + ');', function (error, results, fields) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });
        }
    }]);

    return BaseDao;
}();

exports.default = BaseDao;
//# sourceMappingURL=BaseDao.js.map