const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile("../../build/index.html");
})

router.get('/about', function(req, res) {
    res.send('About page');
});

module.exports = router;