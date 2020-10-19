// 保证一个类只有一个实例，并提供一个访问它的全局访问点

class Singleton {
  show () {
    console.log('我是一个单例对象');
  }
  static getInstance() {
    // 判断是否被new过
    // if (!Singleton.instance) {
    //   Singleton.instance = new Singleton()
    // }
    // return Singleton.instance
    let instance = null
    return !function () {
      if (!instance) {
        instance = new Singleton()
      }
      return instance
    }()
  }
}
const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()

// s1.getInstance()

s1 === s2 // true