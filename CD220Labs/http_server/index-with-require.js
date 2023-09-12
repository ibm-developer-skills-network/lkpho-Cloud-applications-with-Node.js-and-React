const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  // Get the current hour (in 24-hour format)
  const currentHour = new Date().getHours();

  let greeting;

  // Determine the greeting based on the current time
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning!';
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good afternoon';
  } else if (currentHour >=17 && currentHour < 20) {
    greeting = 'Good evening';
  } else {
      greeting = 'Good night';
  }

  res.writeHead(200);
  res.end(`${greeting}, World! The date today is ${today.getDate()}`);
};

const port = 8080;
const server = http.createServer(requestListener);
console.log('Server listening on port: ' + port);
server.listen(port);

// CODE THAT ALSO WORKS
// const http = require('http');
// const today = require('./today');

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   let dateVal = today.getDate();
//   let greeting = "It is still not morning."
//   if (dateVal.getHours()>6 && dateVal.getHours()<12) {
//     greeting = "Good morning!"
//   } else if (dateVal.getHours()>=12 && dateVal.getHours()<18) {
//     greeting = "Good afternoon!"
//   }else if (dateVal.getHours()>=18 && dateVal.getHours()<21) {
//     greeting = "Good evening!"
//   }else if (dateVal.getHours()>=21 && dateVal.getHours()<24) {
//     greeting = "Good night!"
//   }
//   res.end(`Hello, ${greeting} The date today is ${today.getDate()}`);
// }

// const port = 8080;
// const server = http.createServer(requestListener);
// console.log('server listening on port: ' + port);
// server.listen(port);

// ORIGINAL CODE IN FILE
// const http = require('http');
// const today = require('./today');

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end(`Hello, World! The date today is ${today.getDate()}`);
// }

// const port = 8080;
// const server = http.createServer(requestListener);
// console.log('server listening on port: ' + port);
// server.listen(port);
