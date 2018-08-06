// var obj = {
//     name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Kelsey","age": 28}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

/////////////////////////////////////////////////////

//requiring the fs module
const fs = require('fs');

//crearing original object
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

//convert object into string
var originalNoteString = JSON.stringify(originalNote);

//write new string to json file
fs.writeFileSync('notes.json', originalNoteString);

//get (read) string from json file
var noteString = fs.readFileSync('notes.json');

//parse string (turn into object)
var note = JSON.parse(noteString);

//typeof note
console.log(typeof note);

//note.title
console.log(note.title);