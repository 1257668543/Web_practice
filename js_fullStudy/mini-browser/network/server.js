const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<p>123456<p>');
});
server.listen(8088);
