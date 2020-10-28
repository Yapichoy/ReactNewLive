const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    console.log(path.join(__dirname, "../../build/index.html"));
    res.sendFile(path.join(__dirname, "../../build/index.html"));
})

router.get('/about', function(req, res) {
    res.send('About page');
});

module.exports = router;