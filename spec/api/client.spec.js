describe('Dota2Client instance', function () {
    var client,
        steam = {
            execute: function () {}
        };
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
            it('should call steam', function () {
                spyOn(steam, 'execute');
                var history = client.matchHistory();
                history.then(function() {});
                expect(steam.execute.mostRecentCall.args[0]).toBe('IDOTA2Match_570');
                expect(steam.execute.mostRecentCall.args[1]).toBe('GetMatchHistory/v1');
                expect(steam.execute.mostRecentCall.args[2]).toBe(history._parameters);
            });
        });
    });
    describe('matchDetails()', function () {
        it('should exist', function () {
            expect(typeof client.matchDetails).toBe('function');
        });
        it('should define default values for match details', function () {
            var details = client.matchDetails();
            expect(details._gameName).toBe('IDOTA2Match');
            expect(details._gameId).toBe(570);
            expect(details._apiName).toBe('GetMatchDetails');
            expect(details._version).toBe('v1');
        });
        it('should define setter methods', function () {
            var details = client.matchDetails();
            expect(typeof details.matchId).toBe('function');
        });
        describe('then()', function () {
            it('should exist', function () {
                var details = client.matchDetails();
                expect(typeof details.then).toBe('function');
            });
            it('should call steam', function () {
                spyOn(steam, 'execute');
                var details = client.matchDetails();
                details.then(function() {});
                expect(steam.execute.mostRecentCall.args[0]).toBe('IDOTA2Match_570');
                expect(steam.execute.mostRecentCall.args[1]).toBe('GetMatchDetails/v1');
                expect(steam.execute.mostRecentCall.args[2]).toBe(details._parameters);
            });
        });
    });
    describe('matchHistoryBySequenceNumber()', function () {
        it('should exist', function () {
            expect(typeof client.matchHistoryBySequenceNumber).toBe('function');
        });
        it('should define default values for match history by sequence number', function () {
            var history = client.matchHistoryBySequenceNumber();
            expect(history._gameName).toBe('IDOTA2Match');
            expect(history._gameId).toBe(570);
            expect(history._apiName).toBe('GetMatchHistoryBySequenceNum');
            expect(history._version).toBe('v1');
        });
        it('should define setter methods', function () {
            var history = client.matchHistoryBySequenceNumber();
            expect(typeof history.startingSequenceNumber).toBe('function');
            expect(typeof history.maximumMatches).toBe('function');
        });
        describe('then()', function () {
            it('should exist', function () {
                var history = client.matchHistoryBySequenceNumber();
                expect(typeof history.then).toBe('function');
            });
            it('should call steam', function () {
                spyOn(steam, 'execute');
                var history = client.matchHistoryBySequenceNumber();
                history.then(function() {});
                expect(steam.execute.mostRecentCall.args[0]).toBe('IDOTA2Match_570');
                expect(steam.execute.mostRecentCall.args[1]).toBe('GetMatchHistoryBySequenceNum/v1');
                expect(steam.execute.mostRecentCall.args[2]).toBe(history._parameters);
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
            it('should call steam', function () {
                spyOn(steam, 'execute');
                var league = client.leagueListing();
                league.then(function() {});
                expect(steam.execute.mostRecentCall.args[0]).toBe('IDOTA2Match_570');
                expect(steam.execute.mostRecentCall.args[1]).toBe('GetLeagueListing/v1');
                expect(steam.execute.mostRecentCall.args[2]).toBe(league._parameters);
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
            it('should call steam', function () {
                spyOn(steam, 'execute');
                var league = client.liveLeagueGames();
                league.then(function() {});
                expect(steam.execute.mostRecentCall.args[0]).toBe('IDOTA2Match_570');
                expect(steam.execute.mostRecentCall.args[1]).toBe('GetLiveLeagueGames/v1');
                expect(steam.execute.mostRecentCall.args[2]).toBe(league._parameters);
            });
        })
    });
    describe('items()', function () {
        it('should exist', function () {
            expect(typeof client.items).toBe('function');
        });
        it('should define default values for items', function () {
            var items = client.items();
            expect(items._gameName).toBe('IEconDOTA2');
            expect(items._gameId).toBe(570);
            expect(items._apiName).toBe('GetGameItems');
            expect(items._version).toBe('v1');
        });
        describe('then()', function () {
            it('should exist', function () {
                var items = client.items();
                expect(typeof items.then).toBe('function');
            });
            it('should call steam', function () {
                spyOn(steam, 'execute');
                var items = client.items();
                items.then(function() {});
                expect(steam.execute.mostRecentCall.args[0]).toBe('IEconDOTA2_570');
                expect(steam.execute.mostRecentCall.args[1]).toBe('GetGameItems/v1');
                expect(steam.execute.mostRecentCall.args[2]).toBe(items._parameters);
            });
        });
    });
    describe('api().then()', function () {
        it('should create an callback that calls the supplied callback', function () {
            var testApi = client.matchHistory(),
                called = false;

            spyOn(steam, 'execute');

            testApi.then(function () {
                called = true;
            });

            expect(typeof steam.execute.mostRecentCall.args[3]).toBe('function');
            steam.execute.mostRecentCall.args[3]();
            expect(called).toBe(true);
        });
    });
});
