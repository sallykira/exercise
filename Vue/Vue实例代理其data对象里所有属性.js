/**
 * Created by 123 on 2016/12/15.
 */
/*Vue实例代理其data对象里所有属性*/
var data = {
    a: 1
};
var vm = new Vue({
    data: data
});

vm.a === data.a     // --> true

//设置属性也会影响到原始数据
vm.a = 2
data.a // -->2













