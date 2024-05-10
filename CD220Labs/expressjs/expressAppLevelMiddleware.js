const express = require('express');
const app = new express();

app.use(function (req, res, next) {
    if (req.query.password !== "pwd123") {
        return res.status(402).send("This user cannot login ");    
    }
    console.log('Time:', Date.now())
    next()
  });

app.get("/home", (req,res) => {
    return res.send("Hello World!");
});

app.listen(3333, () => {
    console.log(`listening at http://localhost:3333`)
});

// This server uses middleware for authentication. If the password is not pwd123 it will not allow the user to login. This server has just one end point and it takes password as query parameter.

// Run the server.
// // node expressAppLevelMiddleware.js
// Copied!
// You should see output which says Listening at http://localhost:3333

// In the second terminal window, use the curl command to ping the application.
//
// curl localhost:3333/home
// Copied!
// You should see output which say This user cannot login.

// Execute curl command passing the password parameter
// 
// curl http://localhost:3333/home?password=pwd123
// Copied!
// You should see output which say Hello World!.

// This is because the server has a middleware which filters each request to the server to see what the password is and allows to proceed only when the password is pwd123.

// To stop the server, go to the main command window and press Ctrl+c to stop the server.
// Previous
