console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash'); //installed via npm
const yargs = require('yargs'); //installed via npm

const notes = require('./notes'); //created my own file to require

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body); //returns EITHER undefined OR object

    if (note){
        console.log('IT WORKED');
        console.log('---');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else if (note === undefined){
        console.log('BETTER LUCK NEXT TIME');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    notes.removeNote(argv.title);
}else {
    console.log(`command '${command}' not found`);
}