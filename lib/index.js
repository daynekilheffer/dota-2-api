const steam = require('steam-web-api');
const dota2 = require('./client-builder');

module.exports = (key, config) => {
    const steamClient = steam.client(key, config);
    return dota2(steamClient);
}
module.exports.factories = steam.factories;