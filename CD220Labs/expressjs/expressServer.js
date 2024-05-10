const express = require('express');
const app = new express();

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

app.get("/fetchMonth/:num",(req,res)=>{
    let num = parseInt[req.params.num]
    if(num <1 || num >12) {
        res.send("Not a valid month number")
    } else {
        res.send(months[num-1])
    }
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})



// This is a simple express Server which listens at port 3333, with 4 end points.


//  /
//  /loginDetails
//  /login/:name - POST 
//  /:name
// Copied!
// In the terminal window, run the following command which will ensure that the express package is installed.
//
// npm install --save express
// Copied!
// In the terminal window run the server with the following command.
//
// node expressServer.js
// Copied!
// You should see output similar to this.

//
// Listening at http://localhost:3333
// Copied!
// Click on “Split Terminal” to divide the terminal, as depicted in the image below.

// In the second terminal window, use the curl command to ping the application.
// 
// curl localhost:3333
// Copied!
// You should see output similar to this.

// 
// Welcome to the express server
// Copied!
// This indicates that your app is up and running.

// Try the other end points with the curl commands in the same terminal.
// /login/:name

// 
// curl -X POST http://localhost:3333/login/Jason
// Copied!
// You should see output similar to this.

// 
// Jason, You are logged in!
// Copied!
// /:name

// 
// curl http://localhost:3333/Jason
// Copied!
// You should see output similar to this.

// 
// Hello Jason
// Copied!
// /loginDetails

// 
// curl http://localhost:3333/loginDetails
// Copied!
// You should see output similar to this.

// 
// [{"name":"Jason","login_time":"2020-11-20T06:06:56.047Z"}]
// Copied!
// To stop the server, go to the main command window and press Ctrl+c to stop the server.