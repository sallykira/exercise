/**
 * Created by 123 on 2016/12/15.
 */
/*前缀$作区分*/
var data = { a:1 };
var vm = new Vue({
    el: '#example',
    data: data
});

vm.a === data.a // -->true

vm.$data === data // -->true
vm.$el === document.getElementById('example')  // -->true


//Swatch是一个实例方法
vm.Swatch('a',function(newVal,oldVal){
   //这个回调将在'vm.a'改变后调用
});
















