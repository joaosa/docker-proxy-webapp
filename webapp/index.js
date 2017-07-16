const http = require('http');
const port = process.env.PORT;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  const html = `
    <section>
      <h1>I'm a webapp</h1>
      <img src="https://unsplash.it/200/300" alt="I'm an image">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
  `;

  res.end(html);
}).listen(port);
