'use strict';

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

/**
 * Created by hy on 16-9-13.
 */
var _class = function (_think$logic$base) {
    (0, _inherits3.default)(_class, _think$logic$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$logic$base.apply(this, arguments));
    }

    /**
     * some base method in here
     */
    _class.prototype.loginAction = _regenerator2.default.mark(function loginAction() {
        var username, passwd, verify, value, rules, flag;
        return _regenerator2.default.wrap(function loginAction$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!(true == this.http.isPost())) {
                            _context.next = 13;
                            break;
                        }

                        username = this.http.post('username');
                        passwd = this.http.post('passwd');
                        verify = this.http.post('verify');
                        _context.next = 6;
                        return this.http.session('verify');

                    case 6:
                        value = _context.sent;

                        if (!(value.toString() !== verify.toString())) {
                            _context.next = 9;
                            break;
                        }

                        return _context.abrupt('return', this.error(this.locale("not_verify")));

                    case 9:

                        /*校验数据*/
                        rules = {
                            username: "string|required",
                            passwd: "alphaNumericDash|length:6,20"
                        };
                        flag = this.validate(rules);

                        if (flag) {
                            _context.next = 13;
                            break;
                        }

                        return _context.abrupt('return', this.fail("validate error", this.errors()));

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, loginAction, this);
    });
    return _class;
}(think.logic.base);

exports.default = _class;
//# sourceMappingURL=user.js.map