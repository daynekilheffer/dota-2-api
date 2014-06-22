# dota-2-api
API wrapper on top of [steam-web-api](https://github.com/daynekilheffer/steam-web-api)
## Usage
```javascript
var dota = require('dota-2-api');

// create a new steam client
var steamClient = new dota.steam.WebClient({
  key: <your key>
});

// set the steam client to execute using a throttled connection factory set to 1sec wait time between api calls
steamClient.use(new dota.steam.connectionFactories.Throttled(1000));

// create a new dota2 client that uses the steam client
var client = new dota.client({
    steam: steamClient
});

// execute a match history search for the given account id
client.matchHistory().accountId(<account id>).then(function(error, body) {
    console.log(JSON.parse(body));
});
```
## API
All APIs contain a `then(callback)` function which will execute the request to steam and return error and body values.
```
client.matchHistory().then(function(error, body) {
  if (error) {
    // handle error
  }
  console.log(JSON.parse(body));
})
```
### matchHistory()
```
client.matchHistory()
  .heroId(<hero id>)
  .gameMode(<game mode>)
  .skill(<skill>)
  .minimumPlayers(<minimum players>)
  .accountId(<account id>)
  .leagueId(<league id>)
  .startAtMatchId(<starting match id>)
  .tournamentGamesOnly(<true|false)
  .maximumMatches(<maximum number of matches to return>)
  .then(...)
```

### matchDetails()
```
client.matchDetails()
  .matchId(<match id>)
  .then(...)
```

### leagueListing()
```
client.leagueListing()
  .then(...)
```

### liveLeagueGames()
```
client.liveLeagueGames()
  .then(...)
```
