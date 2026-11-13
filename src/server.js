const express = require('express');

const app = express();

const PORT = 2500;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});