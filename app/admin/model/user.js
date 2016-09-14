'use strict';
/**
 * model
 */

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _think$model$base.call.apply(_think$model$base, [this].concat(args))), _this), _this.pk = 'uid', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    _class.prototype.login = _regenerator2.default.mark(function login() {
        return _regenerator2.default.wrap(function login$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                    case 'end':
                        return _context.stop();
                }
            }
        }, login, this);
    });
    _class.prototype.getList = _regenerator2.default.mark(function getList() {
        var instance, list;
        return _regenerator2.default.wrap(function getList$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        //获取 user 模型实例
                        instance = this.model("user");
                        _context2.next = 3;
                        return instance.select();

                    case 3:
                        list = _context2.sent;
                        return _context2.abrupt('return', list);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, getList, this);
    });
    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=user.js.map