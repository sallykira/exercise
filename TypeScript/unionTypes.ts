let luckyNumer: number | string
luckyNumer = 6
luckyNumer = 'six'

// luckyNumer = false    
// error: Type 'false' is not assignable to type 'string | number'.


// 访问联合类型
function getString(something: number | string): string {
  return something.toString()
}
console.log(getString(luckyNumer))