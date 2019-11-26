// 一：【类型+方括号】表示法
let fibonacciA1: number[] = [1, 2, 3, 4, 5]
// let fibonacciA2: number[] = [1, '2', 3, 4, 5]
// error TS2322: Type 'string' is not assignable to type 'number'.
// 数组项中不允许出现其他类型
let fibonacciA3: any[] = ['haha', 25, { name: 'Sally' }];


// 二：数组泛型
let fibonacciB1: Array<number> = [1, 2, 3, 4, 5]
let fibonacciB2: Array<string> = ['1', '2', '3', '4', '5']
let fibonacciB3: Array<any> = [1, '2', 3, 4, 5]


// 三：用接口表示数组***（不常用）
interface NumberArray {
  [index: number]: number
}
let fibonacciC1: NumberArray = [1, 2, 3, 4, 5]

