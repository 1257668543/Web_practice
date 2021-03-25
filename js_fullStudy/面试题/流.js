var u = 'meituan'
var f = 'abcdefghijklmnopqrstuvwxyz'.split('')
var lastIndex = f.indexOf(u[0])
var waste = lastIndex
for(let i = 1; i < u.length; i++) {
  let curIndex = f.indexOf(u[i]) 
	if(curIndex >= lastIndex) {
    waste += (curIndex - lastIndex - 1)
    lastIndex = curIndex
  } else {
    waste += (25 - lastIndex + curIndex)
    lastIndex = curIndex
  }
}
console.log(waste)