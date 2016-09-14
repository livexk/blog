/**
 * Created by hy on 16-9-13.
 */
export default class extends think.controller.base {
    /**
     * some base method in here
     */
    *loginAction() {
        if (true == this.http.isPost()) {
            let username = this.http.post('username');
            let passwd = this.http.post('passwd');
            let verify = this.http.post('verify');
            let value =   yield this.http.session('verify');
            console.log(verify);
            if (value.toString() === verify.toString()){
                console.log("32434");
            }
        }
    }
}