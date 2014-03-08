var ApiBuilderBuilder = require('./builderBuilder');

function Dota2Client() {} 

function createNewBuilder() {
    var builder = new ApiBuilderBuilder();
    builder.gameName('IDOTA2Match');
    builder.gameId(570);
    return builder;
}

Dota2Client.prototype.matchHistory = function () {
    var builder = createNewBuilder();
    builder.apiName('GetMatchHistory');
    builder.version('1');
    builder.addMethod('playerName', 'player_name');
    return builder.build();
}

module.exports = Dota2Client;
