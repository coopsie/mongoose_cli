const yargs = require("yargs");
const mongoose = require("mongoose");
const {createMovie, updateActor, updateDirector, deleteMovie, readMovie} = require ("./movies/functions");
require("./db/connection");

async function app (yargsInput) {
    if (yargsInput.create) {
        const movieObject = {title: yargsInput.title, actor:yargsInput.actor, director:yargsInput.director}
            await createMovie(movieObject);
            console.log(`"${movieObject.title}" has been added to the database.`);
        
    } else if (yargsInput.updateActor) {
        const toUpdate = yargsInput.title;
        const newActor= yargsInput.actor;
            await updateActor (toUpdate, newActor);
            console.log(`Updated Actor to "${newActor}"`);

    } else if (yargsInput.updateDirector) {
        const toUpdate = yargsInput.title;
        const newDirector= yargsInput.director;
            await updateDirector (toUpdate, newDirector);
            console.log(`Updated Director to "${newDirector}"`);

    } else if (yargsInput.delete) {
        if(yargsInput.title) {
            await deleteMovie({title: yargsInput.title});
        }

    } else if (yargsInput.read) {
        const listMovies = readMovie({}); 
        await readMovie(listMovies);

    } else {
        console.log("Command not recognised")
    };
    await mongoose.disconnect();
};

app(yargs.argv);