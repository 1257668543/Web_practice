function find1(str) {
  let founda = false, foundb = false;
  // acb
  for (let c of str) {
    if (c === 'a') {
      founda = true
    } else if (founda && c === 'b') {
      foundb = true
      return true
    } else {
      founda = false
    }
  }
  return false
}
console.log(find1('acfab'));
console.log(find1('acb'));
// abc
function find2() {
  let founda = false, foundb = false;
  for (let c of str) {
    if (c === 'a') {
      founda = true;
    } else if (founda && c === 'b') {
      foundb = true
    } else if (foundb && c === 'c') {
      return true
    } else {
      founda = false; 
      foundb = false;
    }
  }
}