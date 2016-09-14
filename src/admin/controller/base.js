'use strict';

export default class extends think.controller.base {

    /**
     * 前置魔术方法
     * @return {Promise} []
     */
    * __before() {
        let userInfo = yield this.session("userInfo");

        //免登陆控制器
        let $action = ['user/login'];
        if ($action.indexOf(this.http.controller +"/"+ this.http.action) < 0) {
            //如果没有登录，则跳转到登录页面
            if (think.isEmpty(userInfo)) {
                return this.redirect("/admin/user/login");
            }
        }
    }
}