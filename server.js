const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js Server!\n');
});

// Listen on a specific port and IP
const PORT = 3000;
const IP = '127.0.0.1';

server.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}/`);
});
