import { createElement, render, renderDom, Element } from './element'

let virtualDom1 = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['1']),
  createElement('li', {class: 'item'}, ['2'])
])

let el = render(virtualDom1)
renderDom(el, window.app)

console.log(el);
console.log(virtualDom1);

// virtualDom1 = <ul class="list">
//                 <li class="item">1</li>
//                 <li class="item">2</li>
//               </ul>



// DOM diff 比较两个虚拟DOM的区别，比较两个对象的区别 
// 根据两个虚拟对象创建出来 补丁，描述改变的内容，将这个补丁用来更新dom

