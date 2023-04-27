#!/usr/bin/env node
const path = require('path');

class HomeController {
  static show (req, res) {
    res.send('Hello');
    console.log('Hello');
    res.sendFile(path.join(__dirname, 'index.html'))
  }
}

module.exports = HomeController;
