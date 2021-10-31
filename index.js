const fs = require('fs');
const http = require('http');
const url = require('url');

const PORT = 8080;

const output = fs.readFileSync(`./static/main.html`, 'utf-8');

http
  .createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    if (pathname === '/main') {
      res.writeHead(200, {
        'Content-type': 'text/html',
      });
      res.end(output);
    }
  })
  .listen(PORT, () => {
    console.log('Server running on port', PORT);
  });
