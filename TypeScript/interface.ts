// interface(接口)
interface Person {
  readonly id: number
  name: string
  age?: number
  // score: number  --赋值的时候，变量的形状必须和接口的形状保持一致
  // error TS2741: Property 'score' is missing in type '{ name: string; }' but required in type 'Person'.
}

let tom: Person = {
  id: 1156112,
  name: 'Tom',
  // favorite: 'running'   --不允许添加未定义的属性
  // error TS2322: Type '{ name: string; like: string; }' is not assignable to type 'Person'.
}

// tom.id = 1156111
// error TS2540: Cannot assign to 'id' because it is a read - only property.
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候