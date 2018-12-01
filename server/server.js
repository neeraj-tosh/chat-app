const path = require('path');
const express = require('express');
const publicPath= path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
const http = require('http');

const app = express();
app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection',(socket)=>{
    console.log('New User Connected');
    socket.on('disconnect',()=>{
        console.log('User disconnected');
    })
})
server.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})