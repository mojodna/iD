console.log('***********************');
console.log('**       NPMAP       **');
console.log('***********************');

var fs = require('fs');
var configFile = __dirname + '/../../config.json';
var settingsFile = __dirname + '/js/id/npmap.js';
var config, idSettings;
// Check if our config file exists
if (fs.existsSync(configFile)) {
  config = JSON.parse(fs.readFileSync(configFile));
  idSettings = config.iD;
  idSettings.settings.connection.oauth = {
    url: idSettings.settings.connection.api,
    consumerKey: config.oauth.consumerKey,
    secret: config.oauth.consumerSecret
  };
  fs.writeFileSync(settingsFile, 'iD.npmap = ' + JSON.stringify(idSettings, null, 4));
  console.log('***********************');
  console.log('NPMap settings updated');
  console.log('***********************');
}
