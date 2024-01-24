const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  request.statusCode = 200;
  request.setHeader('Content-Type', 'text/plain');
  request.end('Hello World\n');
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

