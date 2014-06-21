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
            expect(typeof history.playerName).toBe('function');
        });
        describe('then()', function () {
            it('should exist', function () {
                var history = client.matchHistory();
                expect(typeof history.then).toBe('function');
            });
        });
    });
});
