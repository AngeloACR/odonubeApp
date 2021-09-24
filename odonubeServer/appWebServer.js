
const webServer = require('./webServer');
const config = require('./config/environment');

const webPort = config.webPort;
const webFolder = './public';
const webPath = webFolder + '/index.html';
const webApp = webServer.init(webFolder, webPath, webPort);


webApp.listen(webPort, () => {
    console.log('Server running at: ' + webPort);
});