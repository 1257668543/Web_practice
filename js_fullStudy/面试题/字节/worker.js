// 不能操作DOM

this.onmessage = function () {
  let sum = 0
  for (let i = 0; i < 100000; i++) {
    sum += i;
  }
  this.postMessage(sum)
}