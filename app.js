const express = require('express');
const app = express();
const taskRoutes = require('./routes')
const mongoose = require('mongoose')

// makes the request from client a javscript object / easier access to body of request
app.use(express.json());


//import the routing functions
app.use('/tasks',taskRoutes);


// Export the app to be used by the server
module.exports = app;