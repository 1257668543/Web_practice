let Component = Vue.extend({
  template: '<div>test</div>'
})

new Component.$mount('#app')



// mixin mixins 的区别
// Vue.mixin({
//   beforeCreate() {
//     // ...
//     // 这种方式会影响到每一个组件的 beforeCreate 函数
//   }
// })




// Computed watch 的区别: Computed会做缓存，在页面刷新时不会重新计算，只有当val变化才会重新计算，复杂操作时用watch
// computed: {
//   newVal () {
//     return this.val + 2
//   }
// }

// data: {
//   obj: {
//     person: {
//       name: 'zs'
//     }
//   }
// }
// watch: {
//   obj() {

//   }
// }

vm.$watch('obj', {
  handler: function(val, oldval) {

  },
  deep: true, // 深度遍历
  immediate: true // 首次绑定即执行handler
})