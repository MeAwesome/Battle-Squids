//Server Requires & Port Setup

const express = require("express");
const os = require("os");
const app = express();
const serv = require("http").Server(app);
const io = require("socket.io")(serv,{});
const port = process.env.PORT || 52470;

//Custom Requires

const _ = require("underscore");
const { Connection, Connections } = require("./server/classes/Connections.js");

//Server Setup & Initiation

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});
app.use("/src/public", express.static(__dirname + "/public"));
serv.listen(port);

if(port != process.env.PORT){
	var __ConnectTo__ = (os.networkInterfaces()["Wi-Fi"]) ? os.networkInterfaces()["Wi-Fi"][1].address + ":" + port : os.networkInterfaces()["Ethernet"][1].address + ":" + port;
	console.clear();
	console.log("--> Webpage Started On } " + __ConnectTo__);
}

const CONNECTIONS = new Connections();

//Connection & Message Handling

io.on("connection", (socket) => {

	CONNECTIONS.addConnection(new Connection(socket));

	socket.on("disconnect", () => {
		
	});

});