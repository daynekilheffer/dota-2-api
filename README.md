# dota-2-api
API wrapper on top of [steam-web-api](https://github.com/daynekilheffer/steam-web-api)

[![Build Status](https://travis-ci.org/daynekilheffer/dota-2-api.svg?branch=master)](https://travis-ci.org/daynekilheffer/dota-2-api)
## Usage
```javascript
var dota2 = require('dota-2-api');

// create a new client
var client = dota2('<key>', {
    // <steam-web-api client config>
    // steam.factories is exposed via dota2.factories for easy use
});

// execute a match history search for the given account id
client.matchHistory()
    .accountId(<account id>)
    .exec()
    .then(result => console.log(result));
```
## API
All APIs contain a `exec()` function which will return a promise resolved with the results from the api
```javascript
client.matchHistory()
    .exec()
    .then(result => console.log(result))
    .catch(err => console.error(err))
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
  .exec()
  .then(...)
```

### matchHistoryBySequenceNumber()
```javascript
client.matchHistoryBySequenceNumber()
  .startingSequenceNumber(<match sequence number>)
  .maximumMatches(<maximum number of matches to return>)
  .exec()
  .then(...)
```

### matchDetails()
```javascript
client.matchDetails()
  .matchId(<match id>)
  .exec()
  .then(...)
```

### leagueListing()
```javascript
client.leagueListing()
  .exec()
  .then(...)
```

### liveLeagueGames()
```javascript
client.liveLeagueGames()
  .exec()
  .then(...)
```

### items()
```javascript
client.items()
  .language(<language>)
  .exec()Â
  .then(...)
```
