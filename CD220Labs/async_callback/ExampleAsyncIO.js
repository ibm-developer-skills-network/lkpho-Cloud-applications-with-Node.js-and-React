// Requiring fs module - fs is used for File I/O
let fs = require('fs');

let filename1 = "courseDetails.json";
let filename2 = "sampleData.json";

// Reading the file Asynchronously - Not blocking rest of execution
function readFile1(filename1) {
    // Using fs.readFile to read the file asynchronously
    fs.readFile(filename1, (err, data) => {
        if (err) {
            // Logging the error if any occurs
            console.log(err);
        } else {
            // Logging the content of the file if read successfully
            console.log("\n\nThe content of the file is \n\n" + data);
            console.log("Completed reading file1");
        }
    });
}

function readFile2(filename2) {
    // Using fs.readFile to read the file asynchronously
    fs.readFile(filename2, (err, data) => {
        if (err) {
            // Logging the error if any occurs
            console.log(err);
        } else {
            // Logging the content of the file if read successfully
            console.log("\n\nThe content of the file is \n\n" + data);
            console.log("Completed reading file2");
        }
    });
}

// Log message before reading the first file
console.log('Before reading the file-1');
readFile1(filename1);

// Log message before reading the second file
console.log('Before reading the file-2');
readFile2(filename2);

// Log message after initiating the reading of both files
console.log('All done!');
