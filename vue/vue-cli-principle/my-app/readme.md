webpack配置打包入口和出口（入口：'src/index.js'，出口：'./dist'）
在webpack中引入babel插件，打包时将es6降为es5
在webpack中引入vue-loader插件，将vue的语法解析为js打包
在webpack中引入html-webpack-plugin插件，将html打包到dist目录中
在webpack中集成css-loader，less-loader，stylus-loader，使用less-loader，stylus-loader将stylus或less解析成标准的css，使用css-loader进行打包，使用webpack自带的style-loader让css在index.html中生效