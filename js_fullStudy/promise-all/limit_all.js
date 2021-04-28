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