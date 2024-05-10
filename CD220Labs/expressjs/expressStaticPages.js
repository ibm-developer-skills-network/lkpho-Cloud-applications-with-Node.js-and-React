const express = require('express');
const app = new express();

app.use(express.static('cad220_staticfiles'))

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

// This server, as you see doesn't have any end points. But it has a middleware which sets the directory for static files. So any file that is in the cad220_staticfiles directory will be accessible. The folder contains the HTML page that would be rendered.

// Run the server using the following command.
// 1
// node expressStaticPages.js
// Copied!
// You should see output which says Listening at http://localhost:3333.

// Add /ReactCalc.html to the url in the address bar.


