var Executor = require('../steam/executor');

module.exports = function () {
    var executor = new Executor({
        steam: this.steamApi,
        game: 'IDOTA2Match_' + this.id,
        api: 'GetMatchDetails/v1',
        methods: [
            {
                name: 'matchId',
                api_name: 'match_id'
            }
        ]
    });
    return executor;
};