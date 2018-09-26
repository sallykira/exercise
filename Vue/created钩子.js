/**
 * Created by 123 on 2016/12/15.
 */
var vm = new Vue({
    data: {
        a: 1
    },
    created: function(){
        // this指向vm实例
        console.log('a is:' + this.a)
    }
}); //--> 'a is: 1'
