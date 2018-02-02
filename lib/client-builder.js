const apiBuilder = require('./api-builder');

module.exports = (steam) => {
    return {
        matchHistory: apiBuilder({
                game: 'IDOTA2Match',
                id: 570,
                api: 'GetMatchHistory',
                version: 'v1'
            })
            .addMethod('heroId', 'hero_id')
            .addMethod('gameMode', 'game_mode')
            .addMethod('skill', 'skill')
            .addMethod('minimumPlayers', 'min_players')
            .addMethod('accountId', 'account_id')
            .addMethod('leagueId', 'league_id')
            .addMethod('startAtMatchId', 'start_at_match_id')
            .addMethod('tournamentGamesOnly', 'tournament_games_only')
            .addMethod('maximumMatches', 'matches_requested')
            .build(steam),
        matchHistoryBySequenceNumber: apiBuilder({
                game: 'IDOTA2Match',
                id: 570,
                api: 'GetMatchHistoryBySequenceNum',
                version: 'v1'
            })
            .addMethod('startingSequenceNumber', 'start_at_match_seq_num')
            .addMethod('maximumMatches', 'matches_requested')
            .build(steam),
        matchDetails: apiBuilder({
                game: 'IDOTA2Match',
                id: 570,
                api: 'GetMatchDetails',
                version: 'v1'
            })
            .addMethod('matchId', 'match_id')
            .build(steam),
        leagueListing: apiBuilder({
                game: 'IDOTA2Match',
                id: 570,
                api: 'GetLeagueListing',
                version: 'v1'
            })
            .build(steam),
        liveLeagueGames: apiBuilder({
                game: 'IDOTA2Match',
                id: 570,
                api: 'GetLiveLeagueGames',
                version: 'v1'
            })
            .build(steam),
        items: apiBuilder({
                game: 'IEconDOTA2',
                id: 570,
                api: 'GetGameItems',
                version: 'v1'
            })
            .addMethod('language', 'language')
            .build(steam),
    }
};

