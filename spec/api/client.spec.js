describe('Dota2Client instance', function () {
    var client;
    beforeEach(function () {
        var Dota2Client = require('../../api/client');
        client = new Dota2Client();
    });

    describe('matchHistory()', function () {
        it('should exist', function () {
            expect(typeof client.matchHistory).toBe('function');
        });
        it('should define default values for match history', function () {
            var history = client.matchHistory()
            expect(history._gameName).toBe('IDOTA2Match');
            expect(history._gameId).toBe(570);
            expect(history._apiName).toBe('GetMatchHistory');
            expect(history._version).toBe('1');
        });
    });
});
