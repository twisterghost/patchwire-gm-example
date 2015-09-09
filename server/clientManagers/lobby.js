'use strict';

var ClientManager = require('patchwire').ClientManager;

class LobbyManager extends ClientManager {

  constructor() {
    super();
    this.on('clientAdded', this.handleClientAdded);
    this.addCommandListener('setName', this.handleSetName);
    this.addCommandListener('chat', this.handleChat.bind(this));
  }

  handleSetName(client, data) {
    client.set('name', data.name);
    console.info('Connection with ID', client.clientId, 'has set their name to', data.name);
  }

  handleClientAdded(client) {
    console.info(client.clientId, 'has connected');
  }

  handleChat(client, data) {
    data.sender = client.get('name');
    this.broadcast(data);
    console.info(client.get('name'), 'says:', data.message);
  }

}

module.exports = LobbyManager;
