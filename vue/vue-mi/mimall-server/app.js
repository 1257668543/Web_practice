const Koa = require('koa2')
const cors = require('koa2-cors') // 跨域处理
const config = require('./config')  // 配置文件
const mongoose = require('mongoose'); // 连接数据库 
const user_router = require('./routes/api/user_router') // 引入路由层
const bodyParser = require('koa-bodyparser');

// 建立数据库连接
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/test');
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open',()=>{
  console.log('database connected !');  
  //成功连接
})

const app = new Koa()

// 使用中间件
app.use(cors())
app.use(bodyParser())
app.use(user_router.routes()).use(user_router.allowedMethods())


app.listen(config.port, () => {
  console.log('服务已启动在端口：' + config.port);
})