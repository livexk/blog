"use strict";

exports.__esModule = true;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

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
    _class.prototype.loginAction = function loginAction() {
        if (true == this.http.isPost()) {
            var model = this.model("user");
            model.getList;
        } else {
            return this.display();
        }
    };

    /**
     * 验证码生成
     */


    _class.prototype.verifyAction = _regenerator2.default.mark(function verifyAction() {
        var ccap, captcha, ary;
        return _regenerator2.default.wrap(function verifyAction$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        ccap = require('ccap');
                        captcha = ccap({
                            width: 150,
                            height: 60,
                            offset: 35,
                            quality: 50,
                            generate: function generate() {
                                return parseInt(Math.random() * 10000 + 1).toString();
                            }
                        });
                        ary = captcha.get();
                        _context.next = 5;
                        return this.http.session("verify", ary[0]);

                    case 5:
                        this.type("image/png");
                        this.send(ary[1]);

                    case 7:
                    case "end":
                        return _context.stop();
                }
            }
        }, verifyAction, this);
    });
    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=user.js.map