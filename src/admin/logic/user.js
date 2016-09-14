/**
 * Created by hy on 16-9-13.
 */
export default class extends think.logic.base {
    /**
     * some base method in here
     */
    *loginAction() {
        if (true == this.http.isPost()) {
            let username = this.http.post('username');
            let passwd = this.http.post('passwd');
            let verify = this.http.post('verify');
            let value =   yield this.http.session('verify');
            /*校验验证码*/
            if (value.toString() !== verify.toString()){
              return  this.error(this.locale("not_verify"))
            }

            /*校验数据*/
            let rules = {
                username: "string|required",
                passwd: "alphaNumericDash|length:6,20"
            };
            let flag = this.validate(rules);
            if(!flag){
                return this.fail("validate error", this.errors());
            }
        }
    }
}