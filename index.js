const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src/index.html"))
})

app.listen(2000);
