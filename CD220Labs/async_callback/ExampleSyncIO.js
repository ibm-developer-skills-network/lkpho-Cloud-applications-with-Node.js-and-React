// Requiring fs module - fs is used for File I/O
var fs = require('fs');
var prompt = require('prompt-sync')();
 
var filename = prompt('What is the name of the file ?');
console.log('Before the reading the file');

// Reading the file Synchronously - Blocking rest of execution

var data = fs.readFileSync(filename);

console.log("\n\nThe content of the file is \n\n"+data);
console.log('All done!');