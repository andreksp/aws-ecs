"use strict"

const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
    res.send(`Hello World Update 1.7 - ${new Date().toISOString()}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
