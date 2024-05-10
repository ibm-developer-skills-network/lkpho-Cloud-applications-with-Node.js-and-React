const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')

let users = []

//Function to check if the user exists
const doesExist = (username)=>{
  let userswithsamename = users.filter((user)=>{
    return user.username === username
  });
  if(userswithsamename.length > 0){
    return true;
  } else {
    return false;
  }
}

//Function to check if the user is authenticated
const authenticatedUser = (username,password)=>{
  let validusers = users.filter((user)=>{
    return (user.username === username && user.password === password)
  });
  if(validusers.length > 0){
    return true;
  } else {
    return false;
  }
}

const app = express();

app.use(express.json());

app.use(session({secret:"fingerpint"}))

app.use("/auth", function auth(req,res,next){
   if(req.session.authorization) { //get the authorization object stored in the session
       token = req.session.authorization['accessToken']; //retrieve the token from authorization object
       jwt.verify(token, "access",(err,user)=>{ //Use JWT to verify token
           if(!err){
               req.user = user;
               next();
           }
           else{
               return res.status(403).json({message: "User not authenticated"})
           }
        });
    } else {
        return res.status(403).json({message: "User not logged in"})
    }
});

app.post("/login", (req,res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (!username || !password) {
      return res.status(404).json({message: "Error logging in"});
  }

  if (authenticatedUser(username,password)) {
    let accessToken = jwt.sign({
      data: password
    }, 'access', { expiresIn: 60 * 60 });

    req.session.authorization = {
      accessToken,username
  }
  return res.status(200).send("User successfully logged in");
  } else {
    return res.status(208).json({message: "Invalid Login. Check username and password"});
  }
});

app.post("/register", (req,res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username && password) {
    if (!doesExist(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

app.get("/auth/get_message", (req,res) => {
  return res.status(200).json({message: "Hello, You are an authenticated user. Congratulations!"});
})

const PORT =5000;

app.listen(PORT,()=>console.log("Server is running"));

// To run this application, as you may notice we use two new packages that you have not used before. Run the following command to install jsonwebtoken and express-session.
// 
// npm install --save express-session jsonwebtoken
// Copied!
// In this code you have one end-point, /auth/get_message which is allowed only for authenticated users. Run the server and try to access the end point, firstly. It should throw an error.
// 
// node expressWithAuthentication.js
// Copied!
// You should see an output which says Listening at http://localhost:5000.

// In the second terminal window, use the following curl command.
// 
// curl localhost:5000/auth/get_message
// Copied!
// You should see an output which says {"message":"User not logged in"}.

// You have to register a user with a username and password and login with that username and password to be able to access the end-point. Click on the Skills Network Toolbox icon, choose Others and click Launch Application. Enter the port number 5000 and open the URL. It will open in a new browser window. Copy the url. Go to https://www.postman.com/. You may have to sign in if this is your first time using postman.

// In the postman, enter the URL that you copied and suffix it with /register.

// Add query parameters username and password, as shown in the following image.

// Set the query type to POST and click send. You will see a confirmation saying that the user has been registered.

// Use the same copied url now to login with the suffix /login. The parameters to be passed remain the same. This is also a POST request. Click send. You will see a message confirming that you are logged in, as seen below.

// Now you can access the /auth/get_message end point and it will return the message.