const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use((req, res, next) => {
    res.header('Access-Control-Allow_Origin', '*');
    res.header(
        'Acess-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow_Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})