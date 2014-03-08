describe('dota2', function () {
    var dota2 = require('..');

    it('should expose a constructor function', function () {
        expect(dota2.client).toBeDefined();
    });

    describe('client', function() {
        it('should be an instance of the Dota2Client', function () {
            expect(dota2.client.prototype).toBe(Dota2Client);
        });
    });
});

