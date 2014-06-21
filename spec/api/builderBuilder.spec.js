describe('ApiBuilderBuilder instance', function () {
    var ApiBuilderBuilder = require('../../api/builderBuilder'),
        builder;
    beforeEach(function () {
        builder = new ApiBuilderBuilder();
    });
    describe('gameName(name)', function () {
        it('should store the game name', function () {
            builder.gameName('gameName');
            expect(builder._gameName).toBe('gameName');
        });
    });
    describe('gameId(id)', function () {
        it('should store the game id', function () {
            builder.gameId('id');
            expect(builder._gameId).toBe('id');
        });
    });
    describe('apiName(name)', function () {
        it('should store the api name', function () {
            builder.apiName('dota');
            expect(builder._apiName).toBe('dota');
        });
    });
    describe('version(vers)', function () {
        it('should store the version', function () {
            builder.version('vers');
            expect(builder._version).toBe('vers');
        });
    });

    describe('addMethod(methodName, apiName)', function () {
        var methodBuilder = new ApiBuilderBuilder();
        it('should create getter/setter for methodName', function () {
            methodBuilder.addMethod('methodName', 'apiName');
            var methodInstance = methodBuilder.build();
            methodInstance.methodName('dayne');
            expect(methodInstance.methodName()).toBe('dayne');
        });
        it('should store the value keyed by the apiName', function () {
            methodBuilder.addMethod('methodName', 'apiName');
            var methodInstance = methodBuilder.build();
            methodInstance.methodName('dayne');
            expect(methodInstance._parameters['apiName']).toBe('dayne');
        });
    });

    describe('build()', function () {
        it('should pass along internal values', function () {
            builder.gameName('1');
            builder.gameId('2');
            builder.apiName('3');
            builder.version('4');

            var apiBuilder = builder.build();
            expect(apiBuilder._gameName).toBe('1');
            expect(apiBuilder._gameId).toBe('2');
            expect(apiBuilder._apiName).toBe('3');
            expect(apiBuilder._version).toBe('4');
        });
    });
});
