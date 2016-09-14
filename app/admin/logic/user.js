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
var _class = function (_think$controller$bas) {
    (0, _inherits3.default)(_class, _think$controller$bas);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
    }

    /**
     * some base method in here
     */
    _class.prototype.loginAction = _regenerator2.default.mark(function loginAction() {
        var username, passwd, verify, value;
        return _regenerator2.default.wrap(function loginAction$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!(true == this.http.isPost())) {
                            _context.next = 9;
                            break;
                        }

                        username = this.http.post('username');
                        passwd = this.http.post('passwd');
                        verify = this.http.post('verify');
                        _context.next = 6;
                        return this.http.session('verify');

                    case 6:
                        value = _context.sent;

                        console.log(verify);
                        if (value.toString() === verify.toString()) {
                            console.log("32434");
                        }

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, loginAction, this);
    });
    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=user.js.map