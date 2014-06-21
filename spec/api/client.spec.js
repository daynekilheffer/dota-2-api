describe('Dota2Client instance', function () {
    var client,
        steam = {};
    beforeEach(function () {
        var Dota2Client = require('../../api/client');
        client = new Dota2Client({steam: steam});
    });

    describe('matchHistory()', function () {
        it('should exist', function () {
            expect(typeof client.matchHistory).toBe('function');
        });
        it('should define default values for match history', function () {
            var history = client.matchHistory();
            expect(history._gameName).toBe('IDOTA2Match');
            expect(history._gameId).toBe(570);
            expect(history._apiName).toBe('GetMatchHistory');
            expect(history._version).toBe('v1');
        });
        it('should define setter methods', function () {
            var history = client.matchHistory();
            expect(typeof history.accountId).toBe('function');
        });
        describe('then()', function () {
            it('should exist', function () {
                var history = client.matchHistory();
                expect(typeof history.then).toBe('function');
            });
        });
    });
    describe('leagueListing()', function () {
        it('should exist', function () {
            expect(typeof client.leagueListing).toBe('function');
        });
        it('should define default values for league listing', function () {
            var league = client.leagueListing();
            expect(league._gameName).toBe('IDOTA2Match');
            expect(league._gameId).toBe(570);
            expect(league._apiName).toBe('GetLeagueListing');
            expect(league._version).toBe('v1');
        });
        describe('then()', function () {
            it('should exist', function () {
                var league = client.leagueListing();
                expect(typeof league.then).toBe('function');
            });
        })
    });
    describe('liveLeagueGames()', function () {
        it('should exist', function () {
            expect(typeof client.liveLeagueGames).toBe('function');
        });
        it('should define default values for league listing', function () {
            var league = client.liveLeagueGames();
            expect(league._gameName).toBe('IDOTA2Match');
            expect(league._gameId).toBe(570);
            expect(league._apiName).toBe('GetLiveLeagueGames');
            expect(league._version).toBe('v1');
        });
        describe('then()', function () {
            it('should exist', function () {
                var league = client.liveLeagueGames();
                expect(typeof league.then).toBe('function');
            });
        })
    });
});
