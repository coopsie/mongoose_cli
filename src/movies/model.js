const mongoose = require("mongoose");

const movieModel = new mongoose.Schema ({
    title: {
        type: String,
        unique: true,
        required: true
    },
    actor: {
        type: String,
        default: "Actor not specified"
    },
    director: {
        type: String,
        default: "Director not specified"
    }
});

const MovieCollection = mongoose.model("Mongoose Movie", movieModel);

module.exports = MovieCollection;