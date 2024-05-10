const express = require('express');
const app = new express();

let userRouter = express.Router()
let itemRouter = express.Router()

userRouter.use(function (req, res, next) {
    console.log('User query Time:', Date());
    next();
  })

userRouter.get('/:id', function (req, res, next) {
    res.send("User "+req.params.id+" last successful login "+Date())
})
  
itemRouter.use(function (req, res, next) {
    console.log('Item query Time:', Date())
    next()
  })

itemRouter.get('/:id', function (req, res, next) {
    res.send("Item "+req.params.id+" last enquiry "+Date())
})

app.use('/user', userRouter)
app.use('/item', itemRouter)


app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})


// node expressRouting.js

// You should see output which says Listening at http://localhost:3333.

// In the second terminal window, use the following curl command.
// 1
// curl localhost:3333/item/1
// Copied!
// You should see output which says Item 1 last enquiry Fri Nov 20 2020 15:17:46 GMT+0530 (India Standard Time).

// In the second terminal window, use the following curl command.
// 1
// curl localhost:3333/user/1
// Copied!
// You should see output which says User 1 last successful login Fri Nov 20 2020 15:19:52 GMT+0530 (India Standard Time).

// To stop the server, go to the main command window and press Ctrl+c to stop the server.