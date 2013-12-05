var request = require('request');

function SteamApi(config) {
    if (!config) throw 'SteamApi requires a configuration object';
    this.key = config.key;
}

function getParameters(parameters) {
    var params = [];
    parameters = parameters || {};
    params.push({
        key: 'key',
        val: this.key
    });
    for (var key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            params.push({
                key: key,
                val: parameters[key]
            });
        }
    }
    return params.map(function(param) {
        return param.key + '=' + param.val;
    });
}

SteamApi.prototype.executeApi = function(gameName, apiName, parameters, callback) {
    var url = 'http://api.steampowered.com/' + gameName + '/' + apiName + '?' + getParameters.call(this, parameters).join('&');
    console.log('url', url);
    request(url, function(error, resp, body) {
        console.log(resp.statusCode);
        if (error) {
            callback(null, error);
        }
        else if (resp.statusCode === 200) {
            callback(body);
        }
    });
};

module.exports = SteamApi;