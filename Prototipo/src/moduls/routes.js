const express= require('express');
const path =require('path');
const fs = require('fs');
const rtConfig = require('../config/rt.config');

const router = express.Router();

router.get('/',rtConfig.home);

module.exports = router;