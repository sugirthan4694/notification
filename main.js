const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true}});
  mainWindow.loadURL('file://' + __dirname + '/window.html');
});
