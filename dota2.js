var Dota2Client = require('./api/client');

function clientFactory(config) {
    return new Dota2Client(config);
}


module.exports = {
    steam : require('./lib/steam-web-api'),
    client : clientFactory
};
