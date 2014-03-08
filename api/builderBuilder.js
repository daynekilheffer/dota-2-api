var ApiBuilder = require('./builder');

function ApiBuilderBuilder() {
    this._methods = [];    
}

ApiBuilderBuilder.prototype.gameName = function (name) {
    this._gameName = name;
}

ApiBuilderBuilder.prototype.gameId = function (id) {
    this._gameId = id;
}

ApiBuilderBuilder.prototype.apiName = function (name) {
    this._apiName = name;
}

ApiBuilderBuilder.prototype.version = function (version) {
    this._version = version;
}

ApiBuilderBuilder.prototype.addMethod = function (methodName, apiName) {
    this._methods.push({name: methodName, api: apiName});
}

ApiBuilderBuilder.prototype.build = function () {
    var builder = new ApiBuilder();
    builder._gameName = this._gameName;
    builder._gameId = this._gameId;
    builder._apiName = this._apiName;
    builder._version = this._version;
    this._methods.forEach(function (method) {
        builder[method.name] = function (value) {
            if( arguments.length === 0 ) {
                return this._parameters[method.api];
            } else {
                this._parameters[method.api] = value;
                return this;
            }
        };
    });
    return builder;
}

module.exports = ApiBuilderBuilder;

