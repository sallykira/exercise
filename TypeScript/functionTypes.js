"use strict";
// 一、函数声明
function sum1(x, y) {
    return x + y;
}
sum1(1, 3);
// 二、函数表达式
var sum2 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
