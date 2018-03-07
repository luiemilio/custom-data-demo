const liveServer = require('live-server');
const openfinConfigBuilder = require('openfin-config-builder');
const openfinLauncher = require('openfin-launcher');
const path = require('path');

let target;
const configPath = path.resolve('public/app.json');
const serverParams = {
    root: path.resolve('public'),
    open: false,
    logLevel: 2
};

//Update our config and launch openfin.
function launchOpenFin() {
    openfinLauncher.launchOpenFin({
        configPath: configPath
    });
}


//Start the server server and launch our app.
liveServer.start(serverParams).on('listening', () => {
    const {
        address,
        port
    } = liveServer.server.address();
    target = `http://localhost:${ port }`;
    launchOpenFin();
});