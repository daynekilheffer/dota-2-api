var ApiBuilderBuilder = require('./builderBuilder');

function Dota2Client(config) {
    this._steam = config.steam;
} 

function createNewBuilder() {
    var builder = new ApiBuilderBuilder(this._steam);
    builder.gameName('IDOTA2Match');
    builder.gameId(570);
    return builder;
}

Dota2Client.prototype.matchHistory = function () {
    var builder = createNewBuilder.apply(this);
    builder.apiName('GetMatchHistory');
    builder.version('v1');
    // builder.addMethod('playerName', 'player_name');
    builder.addMethod('heroId', 'hero_id');
    builder.addMethod('gameMode', 'game_mode');
    builder.addMethod('skill', 'skill');
    // builder.addMethod('dateMinimum', 'date_min');
    // builder.addMethod('dateMaximum', 'date_max');
    builder.addMethod('minimumPlayers', 'min_players');
    builder.addMethod('accountId', 'account_id');
    builder.addMethod('leagueId', 'league_id');
    builder.addMethod('startAtMatchId', 'start_at_match_id');
    builder.addMethod('tournamentGamesOnly', 'tournament_games_only');
    builder.addMethod('maximumMatches', 'matches_requested');
    return builder.build();
}

Dota2Client.prototype.matchDetails= function () {
    var builder = createNewBuilder.apply(this);
    builder.apiName('GetMatchDetails');
    builder.version('v1');
    builder.addMethod('matchId', 'match_id');
    return builder.build();
}

Dota2Client.prototype.leagueListing = function () {
    var builder = createNewBuilder.apply(this);
    builder.apiName('GetLeagueListing');
    builder.version('v1');
    return builder.build();
}

Dota2Client.prototype.liveLeagueGames = function () {
    var builder = createNewBuilder.apply(this);
    builder.apiName('GetLiveLeagueGames');
    builder.version('v1');
    return builder.build();
}

Dota2Client.prototype.items = function () {
    var builder = createNewBuilder.apply(this);
    builder.gameName('IEconDOTA2');
    builder.gameId(570);
    builder.apiName('GetGameItems');
    builder.version('v1');
    builder.addMethod('language', 'language');
    return builder.build();
}

module.exports = Dota2Client;

