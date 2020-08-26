// console.log('hello world')
const express = require('express'); // 引入后端开发框架
const apiMocker = require('mocker-api'); // 引入数据接口
const fs = require('fs'); // 引入文件系统(node 内置)
const path = require('path'); // 引入路径模块
const app = express(); // 执行express获取后端应用app

// localhost 127.0.0.1: 8080 localhost
// 阿里云 IP :3306 mysql :27017 mongodb

app.get('/',(req,res) => {
    fs.createReadStream('./home.html').pipe(res);
    // res.end('hello world')
})

apiMocker(app,path.resolve('./mocker/mocker.js'));

app.listen(1314); //端口