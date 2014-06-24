var dota = require('..');

var steamClient = new dota.steam.WebClient(require('../../steam-web-api/steam.config'));

steamClient.use(new dota.steam.connectionFactories.Throttled(1000));

var client = new dota.client({
    steam: steamClient
});

client.items().language('en').then(function(error, body) {
    console.log(body);
});
