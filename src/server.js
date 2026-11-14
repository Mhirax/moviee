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

//ENDPOINTS
//AUTH - signup, signin
//MOVIES - get all movies, get a single movie, add a movie, update a movie, delete a movie
//USERS - get all users, get a single user profile.
//WATCHLIST - get all watchlists, get a single watchlist, add a watchlist, update a watchlist, delete a watchlist