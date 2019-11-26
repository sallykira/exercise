"use strict";
var tom = {
    id: 1156112,
    name: 'Tom',
};
// tom.id = 1156111
// error TS2540: Cannot assign to 'id' because it is a read - only property.
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
