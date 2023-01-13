const MovieCollection = require("./model");

async function createMovie(movieObject) {
    try {
        const newMovie = await MovieCollection.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    };
};

async function updateActor(title, newActor) {
    try {
        return await MovieCollection.updateOne({title: title} ,{actor: newActor});
    } catch (error) {
        console.log(error);
    };
};

async function updateDirector(title, newDirector) {
    try {
        return await MovieCollection.updateOne({title: title} ,{director: newDirector});
    } catch (error) {
        console.log(error);
    };
};

async function deleteMovie(movieObject) {
    try {
        if (movieObject.title) {
            await MovieCollection.deleteOne({title: movieObject.title}).exec();
            console.log(`"${movieObject.title}" has been deleted.`)
        };
    } catch (error) {
        console.log(error)
    };
};

async function readMovie() {
    try {
        const allMovies = await MovieCollection.find({}); 
        for (let index = 0; index < allMovies.length; index++) {
            const movieInfo = allMovies[index];
            console.log(`Film: ${movieInfo.title} Actor: ${movieInfo.actor} Director: ${movieInfo.director}`);
        }        
    } catch (error) {
        console.log(error)
    };
};

module.exports = {createMovie, updateActor, updateDirector, deleteMovie, readMovie};