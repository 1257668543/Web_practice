# http 头部字段
  请求头
  use-agent: 

# 响应头
  set-cookie: 后端设置cookie

# 通用头
  当用在请求的时候
  Content-type: application/x-form-url-encode | application/json | multipart/form-data
  <input name="name">
  <input name="pwd">
  application/x-form-url-encode: name=XXX&pwd=XXX
  application/json: {name:XXX, pwd:XXX}
  multipart/form-data:
  --------分隔符----------
  name=XXX
  --------分隔符----------
  pwd=XXX
  --------分隔符----------

  用在响应的时候
  content-type: image/jpeg image/png text/html text/javascript