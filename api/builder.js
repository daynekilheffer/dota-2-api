function ApiBuilder() {
    this._parameters = {};
}

ApiBuilder.prototype.then = function (callback) {
    var fullGameName = this._gameName + '_' + this._gameId,
        fullApiName = this._apiName + '/' + this._version;

    this._steam.execute(fullGameName, fullApiName, this._parameters, function(error, body) {
        console.log(body);
        callback(error, body);
    });
};

module.exports = ApiBuilder;
