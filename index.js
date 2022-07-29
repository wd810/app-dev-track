const express = require('express');
const rateLimit = require('express-rate-limit');

const PORT =  process.env.PORT || 5000;

const app = express();

app.use("/", (req, res) => {
    res.status(200).send('OK');
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});