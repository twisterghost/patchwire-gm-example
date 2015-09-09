'use strict';

var Server = require('patchwire').Server;
var LobbyManager = require('./clientManagers/lobby.js');;

var lobbyManager = new LobbyManager();

var gameServer = new Server(function(client) {
  lobbyManager.addClient(client);
});

gameServer.listen(3001);
