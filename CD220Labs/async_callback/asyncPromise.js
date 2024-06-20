// Requiring prompt-sync module to enable synchronous user input
let prompt = require('prompt-sync')();

// Requiring fs module - fs is used for File I/O
let fs = require('fs');

// Creating a new Promise to handle file reading
const methCall = new Promise((resolve, reject) => {
    // Prompting the user to input the filename
    let filename = prompt('What is the name of the file?');
    try {
        // Reading the file synchronously
        const data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
        // Resolving the promise with the file data if read successfully
        resolve(data);
    } catch (err) {
        // Rejecting the promise if an error occurs
        reject(err);
    }
});

// Logging the promise object
console.log(methCall);

// Handling the resolved and rejected states of the promise
methCall.then(
    // Logging the file data if the promise is resolved
    (data) => console.log(data),
    // Logging an error message if the promise is rejected
    (err) => console.log("Error reading file")
);
