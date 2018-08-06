console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try { //used a try/catch statement to see if a notes-data file exists, if not creates
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
        console.log('An error has occured');
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    
    
    var duplicateNotes = notes.filter((note) => note.title === title); //filtered the notes array and checked to see if any of the titles in that aray are equal to the current title the user would like to pass in

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

    // notes[0].title

    

};

var getAll = () => {
    console.log(`Getting All Notes`);
};

var getNote = (title) => {
    console.log(`Reading Note "${title}"`);
};

var removeNote = (title) => {
    console.log(`Note, "${title}", has been removed`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}

//console.log(module);