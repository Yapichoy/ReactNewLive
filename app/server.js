const express = require('express')
const app = express()
const port = 3000;
const path = ('path');
const router  = require('./router/router.js');

app.use(express.static('../build'));
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})