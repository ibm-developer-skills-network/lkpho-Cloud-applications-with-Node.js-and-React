 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Create routers for users and items
let userRouter = express.Router();
let itemRouter = express.Router();

// Middleware for user router to log query time
userRouter.use(function (req, res, next) {
    console.log('User query Time:', Date());
    next();
});

// Route to handle user requests with ID parameter
userRouter.get('/:id', function (req, res, next) {
    res.send("User " + req.params.id + " last successful login " + Date());
});

// Middleware for item router to log query time
itemRouter.use(function (req, res, next) {
    console.log('Item query Time:', Date());
    next();
});

// Route to handle item requests with ID parameter
itemRouter.get('/:id', function (req, res, next) {
    res.send("Item " + req.params.id + " last enquiry " + Date());
});

// Mount the routers to specific paths
app.use('/user', userRouter);
app.use('/item', itemRouter);

// Start the server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
