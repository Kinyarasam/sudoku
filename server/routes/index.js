#!/usr/bin/env node
const express = require('express');
const router = express.Router();
const HomeController = require('../controller/HomeController');

router.get('/', HomeController.show);

module.exports = router;
