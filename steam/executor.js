function generateMethods(methods) {
    var self = this;
    methods.forEach(function(method) {
        self[method.name] = function(arg) {
            if (arg) {
                self.params[method.api_name] = arg;
            }
            return self;
        };
    });
}

function Executor(data) {
    console.log(data);
    this.steam = data.steam;
    this.game = data.game;
    this.api = data.api;
    
    this.params = {};
    
    generateMethods.call(this, data.methods);
}

Executor.prototype.execute = function(callback) {
    this.steam.executeApi(this.game, this.api, this.params, function(data, error) {
        callback(data, error);
    });
};

module.exports = Executor;