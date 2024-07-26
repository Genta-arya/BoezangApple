const express = require('express');
const next = require('next');
const cors = require('cors');
const dev = false ;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors({
    origin: '*', 
    methods: ['GET', 'POST'],
  }));


 
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = 5005; 
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
