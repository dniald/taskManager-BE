const express = require('express');
// const { default: api } = require('./api');
const app = express();
const port = 3000

app.get('/', (req, res) =>{
    res.send('Hello, world  !');
})

app.get('/api', (req, res) =>{
    res.send('this is api test');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})