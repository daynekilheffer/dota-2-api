# dota-2-api
API wrapper on top of [steam-web-api](https://github.com/daynekilheffer/steam-web-api)

[![Build Status](https://travis-ci.org/daynekilheffer/dota-2-api.svg?branch=master)](https://travis-ci.org/daynekilheffer/dota-2-api)
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
```javascript
client.matchHistory().then(function(error, body) {
  if (error) {
    // handle error
  }
  console.log(JSON.parse(body));
})
```
### matchHistory()
```javascript
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

### matchHistoryBySequenceNumber()
```javascript
client.matchHistoryBySequenceNumber()
  .startingSequenceNumber(<match sequence number>)
  .maximumMatches(<maximum number of matches to return>)
  .then(...)
```

### matchDetails()
```javascript
client.matchDetails()
  .matchId(<match id>)
  .then(...)
```

### leagueListing()
```javascript
client.leagueListing()
  .then(...)
```

### liveLeagueGames()
```javascript
client.liveLeagueGames()
  .then(...)
```

### items()
```javascript
client.items()
  .language(<language>)
  .then(...)
```
