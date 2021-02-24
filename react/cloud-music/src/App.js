// import React, { Components } from 'react';
import './App.css';
import { GlobalStyle } from './style';  // style 放样式的
// iconfont
import { IconStyle } from './assets/iconfont/iconfont';
import { HashRouter } from 'react-router-dom'; // 前端路由
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';

// 根据当前path /  /single
function App() { // react 组件 函数式组件 界面显示的，StatelessComponent
  return ( // JSX
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62b;</i>
      {renderRoutes(routes)}
    </HashRouter>
  )
}

// class App extends Component { // 类式组件 StatefullComponent
//   constructor() {
//     this.setState({

//     })
//   }
// }

export default App;