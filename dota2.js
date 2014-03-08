var Dota2Client = require('./api/client');

function clientFactory() {
    return new Dota2Client();
}


module.exports = {
    client : clientFactory
};
