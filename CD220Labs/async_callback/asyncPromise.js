var prompt = require('prompt-sync')();
var fs = require('fs');

const methCall = new Promise((resolve,reject)=>{
    var filename = prompt('What is the name of the file ?');
    try {
      const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'}); 
      resolve(data);
    } catch(err) {
      reject(err)
    }
});

console.log(methCall);

methCall.then(
  (data) => console.log(data),
  (err) => console.log("Error reading file") 
);
