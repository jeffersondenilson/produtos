const PORT = process.env.PORT || 3001;
const path = require('path');
const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const db = require('./db.json');

const router = jsonServer.router(db);
const server = jsonServer.create();

server.use(cors());
server.use('/api', router);

if(process.env.NODE_ENV === 'production'){
  // serve static files (production)
  server.use(express.static(path.resolve(__dirname, '../frontend/dist/frontend')));

  // send index.html for other routes
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/frontend', 'index.html'));
  });
}

server.listen(PORT);