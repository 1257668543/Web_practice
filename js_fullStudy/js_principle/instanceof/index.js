let num = [1, 2, 3]
// new Array(1, 2, 3)
// num.__proto__ = Array.prototype


// console.log(num instanceof Array);

function myins(type1, type2) {
  let proto = type1.__proto__.constructor
  while(proto) {
    if (proto == type2) {
      return true
    }
    proto = proto.__proto__.constructor
  }
  return false
}

console.log(myins(num, Array))