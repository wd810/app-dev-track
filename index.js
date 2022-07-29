const express = require('express');
const rateLimit = require('express-rate-limit');

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/test", function roureHandler(req, res) {
    res.send('ok');
})