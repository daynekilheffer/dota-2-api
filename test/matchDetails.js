var dota = require('..');

var steamClient = new dota.steam.WebClient(require('../../steam-web-api/steam.config'));

if (process.argv.length !== 3) {
    console.log('usage: node matchDetails.js <matchId>');
    process.exit(0);
}

steamClient.use(new dota.steam.connectionFactories.Throttled(1000));
var client = new dota.client({
    steam: steamClient
});

client.matchDetails().matchId(process.argv[2]).then(function(error, body) {
    console.log(body);
});
