// 可变 (mutable)
// 不可变 (immutable)
let a = {a: 1}
let b = a;
b.a = 2;

let b1 = {
  ...a
}
b1.a = 2

let c = [123]
c.push(4); // mutable

c.concat(5); // immutable