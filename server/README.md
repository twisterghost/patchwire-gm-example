# Patchwire Server Example

In this directory, you can find an example Patchwire server. **This example uses Node.js 4.0.0 / ES6 functionality**, so it will not run unless Node version 4+ is used, or a compiler like Babel is used to preprocess.

## Running the server

1. `npm install`
2. `npm start`

## How it works

The server here is very simple and only handles adding users, setting names, and broacasting chat messages. `clientManagers` contains a `lobby.js` which has a class that extends the default `ClientManager` class from patchwire. The `LobbyManager` class adds some handlers for commands to itself. `index.js` the creates a Patchwire server and routes incoming connections into a `LobbyManager` instance.
