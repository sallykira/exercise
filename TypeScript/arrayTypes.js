"use strict";
// 一：【类型+方括号】表示法
var fibonacciA1 = [1, 2, 3, 4, 5];
// let fibonacciA2: number[] = [1, '2', 3, 4, 5]
// error TS2322: Type 'string' is not assignable to type 'number'.
// 数组项中不允许出现其他类型
var fibonacciA3 = ['haha', 25, { name: 'Sally' }];
// 二：数组泛型
var fibonacciB1 = [1, 2, 3, 4, 5];
var fibonacciB2 = ['1', '2', '3', '4', '5'];
var fibonacciB3 = [1, '2', 3, 4, 5];
var fibonacciC1 = [1, 2, 3, 4, 5];
