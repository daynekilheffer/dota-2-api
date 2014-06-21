var dota = require('..');

var steamClient = new dota.steam.WebClient(require('../../steam-web-api/steam.config'));
console.log(dota.steam.connectionFactories);
steamClient.use(new dota.steam.connectionFactories.Throttled(1000));
var client = new dota.client({
    steam: steamClient
});

client.matchHistory().accountId(140802608).then(function(error, body) {
    console.log(body);
});
