const Config = require('../config/Constant')

module.exports = {
    getConnectionFullUrl: () => {
        const hostStrArr = [];
        Config.DATABASE.HOST.forEach(HOST => {
            hostStrArr.push(`${HOST.NAME}:${HOST.PORT}`);
        });
        return `mongodb://${Config.DATABASE.HOST}:${Config.DATABASE.HOST.PORT}/${Config.DATABASE.NAME}?connectTimeoutMS=3000000`;
    },

    getConnectionSimpleUrl: () => {
        const hostStrArr = [];
        Config.DATABASE.HOST.forEach(HOST => {
            hostStrArr.push(`${HOST.NAME}:${HOST.PORT}`);
        });
        return `mongodb://${hostStrArr.toString()}/${Config.DATABASE.NAME}`;
    }
}