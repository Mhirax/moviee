const express = require('express');

const app = express();

app.get("/hello", (req, res) => {
    res.json({ message: "Hello World!" });
});

const PORT = 2500;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

//GET, POST, PUT, DELETE routes will be defined here
// http://localhost:2500/