import express from "express";

//Import routes
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

// API routes
app.use("/movies", movieRoutes);


const PORT = 2500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//GET, POST, PUT, DELETE 
// http://localhost:2500/

//ENDPOINTS
//AUTH - signup, signin
//MOVIES - get all movies, get a single movie, add a movie, update a movie, delete a movie
//USERS - get all users, get a single user profile.
//WATCHLIST - get all watchlists, get a single watchlist, add a watchlist, update a watchlist, delete a watchlist
