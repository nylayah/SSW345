// Require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const app = express();
const routes = require('./routes/routes');

// 3- Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);


// 2- Start the server
const server = app.listen(port, (error)=>{
    if (error) return console.log(`Error: ${error}`);
    
    console.log(`Server listening on port ${server.address().port}`);
    
});