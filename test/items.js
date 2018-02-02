var inspect = require('eyes').inspector({
    maxLength: 2048
});
const dota2 = require('..');

const client = dota2(process.env.STEAM_KEY, {
    connectionFactory: dota2.factories.throttled(1000),
})

client.items()
    .language('es')
    .exec()
    .then(inspect)
    .catch(console.error);