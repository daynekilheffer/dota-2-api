var dota = require('..');

var steamClient = new dota.steam.WebClient(require('../../steam-web-api/steam.config'));
console.log(dota.steam.connectionFactories);
steamClient.use(new dota.steam.connectionFactories.Throttled(1000));
var client = new dota.client({
    steam: steamClient
});
console.log(process.argv);
client.matchDetails().matchId(process.argv[2]).then(function(error, body) {
    console.log(body);
});
