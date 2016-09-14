/**
 * Created by hy on 16-9-13.
 */



export default class extends think.controller.base {
    /**
     * some base method in here
     */
    loginAction() {
        if (true == this.http.isPost()) {
            let model = this.model("user");
            model.getList;
        } else {
            return this.display();
        }
    }

    /**
     * 验证码生成
     */
    *verifyAction() {
        let ccap = require('ccap');
        let captcha = ccap({
            width: 150,
            height: 60,
            offset: 35,
            quality: 50,
            generate: function () {
                return parseInt(Math.random()*10000+1).toString();
            }
        });
        var ary = captcha.get();
        yield this.http.session("verify",ary[0]);
        this.type("image/png");
        this.send(ary[1]);
    }
}