var Executor = require('../steam/executor');

module.exports = function () {
    var executor = new Executor({
        steam: this.steamApi,
        game: 'IDOTA2Match_' + this.id,
        api: 'GetMatchDetails/v1',
        methods: [
            {
                name: 'playerName',
                api_name: 'player_name'
            },
            {
                name: 'heroId',
                api_name: 'hero_id'
            },
            {
                name: 'gameMode',
                api_name: 'game_mode'
            },
            {
                name: 'skill',
                api_name: 'skill'
            },
            {
                name: 'dateMinimum',
                api_name: 'date_min'
            },
            {
                name: 'dateMaximum',
                api_name: 'date_max'
            },
            {
                name: 'minimumPlayers',
                api_name: 'min_players'
            },
            {
                name: 'accountId',
                api_name: 'account_id'
            },
            {
                name: 'leagueId',
                api_name: 'league_id'
            },
            {
                name: 'startingMatchId',
                api_name: 'start_at_match_id'
            },
            {
                name: 'maximumMatches',
                api_name: 'matches_requested'
            },
            {
                name: 'tournamentGamesOnly',
                api_name: 'tournament_games_only'
            }
        ]
    });
    return executor;
};