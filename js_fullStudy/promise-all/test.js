Promise.limitAll = function(promiseCreatorS, max) {
  return new Promise((resolve, reject) => {
    let i = 0, count = 0, pendding = 0, res = []
    function requestWork() {
      if(count >= promiseCreators.length) {
        resolve(res)
        return
      }
      while(i < promiseCreator.length && pendding < max) {
        const creator = promiseCreators[i]
        let index = i
        creator.then(r => {
          console.log(r);
          pendding --
          count ++
          res[index] = r
          requestWork()
        })
      }
      i ++
      pendding ++
    }
    requestWork()
  })
}

function sleep(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(t);
    }, t)
  })
}

//
const time = function(t) {
  return function() {
    return sleep(t);
  }
}
const err = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(reject(1), time)
  })
}
const err1 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(reject(2), time)
  })
}
console.time('111')
Promise.all([sleep(1000), sleep(500),
err1(300), err(400)]).then((r) => {
  console.log(r);
  console.timeEnd('111')
}).catch(err => {
  console.log(err);
})
