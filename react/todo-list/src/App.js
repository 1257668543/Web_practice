import { createRef, useState } from 'react';
import './App.css';
import Test from './Test'
// JSX vue 里面的 render
const todoDefault = [
  {
    text: 'eat',
    done: false
  },
  {
    text: 'sleep',
    done: false
  }
]
function App() {
  const [ todos, setTodos ] = useState(todoDefault) // [响应式的数据，修改数据的方法]
  const ref = createRef();
  const arr = [1, 2, 3];
  const handleClick = () => {
    // ref.current DOM 节点
    let val = ref.current.value;
    // const newTodos = todos.concat({text: val, done: false});
    let newTodos = todos.slice(0)
    newTodos.unshift({text: val, done: false})
    setTodos(newTodos)
    console.log(val);
  }
  const delItem = (i) => {
    let newTodos = todos.slice(0);
    newTodos.splice(i, 1)
    setTodos(newTodos)  // 显示调用一下 更改数据的 api，因为没有监听数据的getter和setter
  }
  // 虚拟DOM
  return (
    <>
    <Test name="小明" age={18} onMessage={(msg) => {
      console.log(msg);
    }} />
      <input type="text" ref={ref}/>
      <button onClick={handleClick}>添加待办事项</button>
      {
        todos.map((todoItem, i) => {
          return <li key={i} onClick={() => {
            delItem(i);
          }}>
            {todoItem.text}
          </li>
        })
      }
      {/* Fragment */}
      { arr }
      { true ? 'true' : 'false' }
      { console.log(1) }
    </>
  );
}

export default App;
