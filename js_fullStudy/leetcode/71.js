var simplifyPath = function(path) {
  let pathArr = path.split('/')
  let pathStack = []
  let res = ""
  pathArr.forEach(item => {
    switch (item){
      case "":
        break;
      case ".":
        break;
      case "..":
        if (pathStack.length === 0) {
          break
        }
        pathStack.shift()
        break;
      default: 
        pathStack.unshift(item)
        break;
    } 
  })
  if (pathStack.length) {
    for (let i = pathStack.length -1; i >= 0; i--) {
      res = res.concat("/" + pathStack[i])
    }
    return res
  }
  res = res.concat("/")
  return res
};
simplifyPath("/../")