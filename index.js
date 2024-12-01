const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const port = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://45.131.64.15:6180/' });
});
server.listen(port, () => {
  console.log(`The server is currently running on port: ${port}`);
});
