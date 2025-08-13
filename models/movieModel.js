const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
  movieid: { type: Number},
  moviename: { type: String },
  moviedescription: { type: String },
  
});

module.exports = mongoose.model('Movies', MoviesSchema);
