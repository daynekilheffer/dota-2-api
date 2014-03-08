describe('dota2', function () {
    var dota2 = require('..');

    it('should expose a constructor function', function () {
        expect(dota2.client).toBeDefined();
    });

    describe('client()', function() {
        it('should return a new client', function () {
            var Dota2Client = require('../api/client');
            expect(dota2.client() instanceof Dota2Client).toBeTruthy();
        });
    });
});

