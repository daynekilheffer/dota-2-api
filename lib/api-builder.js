const {promisify} = require('util');

module.exports = (opts) => {
    const methods = [];
    const builder = {
        addMethod: (methodName, parameterName) => {
            methods.push({methodName, parameterName})
            return builder;
        },
        build: steam => {
            execute = promisify(steam.execute)
            return () => {
                const api = {};
                const parameters = {};
                methods.forEach(method => {
                    api[method.methodName] = val => {
                        parameters[method.parameterName] = val;
                        return api;
                    }
                })
                api.exec = () => execute(`${opts.game}_${opts.id}`, `${opts.api}/${opts.version}`, parameters)
                return api;
            }
        }
    };
    return builder;
}