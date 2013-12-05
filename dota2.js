

function Dota2Api(steam, config) {
    config = config || {};
    this.steamApi = steam;
    this.id = config.dota2id || 570;
}

Dota2Api.prototype.matchDetails = require('./api/match.details');
Dota2Api.prototype.matchHistory = require('./api/match.history');

module.exports = Dota2Api;