// 一、函数声明
function sum1(x: number, y: number): number{
  return x+y
}
sum1(1,3)

// 二、函数表达式
let sum2: (x: number, y: number) => number = function (x:number, y:number):number {
  return x+y
}

// 用接口定义函数形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
  return source.search(subString) !== -1
}