var Dota2Api = require('../dota2');
var SteamApi = require('../steam/steam');
var steamConfig = require('../steam.config');


var steamApi = new SteamApi({
    key: steamConfig.key
});

var api = new Dota2Api(steamApi, {
    dota2id: 205790
});

var matchHistory = api.matchHistory();

matchHistory.playerName('dayne').execute(function(history) {
    // console.log(history);
});