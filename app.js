const express = require('express');
const app = express();
const path = require("path");

const http = require("http");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public"))); // this coe is written so that we could write vanila css and all etc.

io.on("connection",function (socket) {
    socket.on("send-location", function (data) {
        io.emit("receive-location", {id: socket.id, ...data});
    });
    
    socket.on("disconnected",function(){
        io.emit("user-disconnected", socket.id);
    });
});

app.get("/",function (req ,res ){
    res.render("index");
});

server.listen(3000);