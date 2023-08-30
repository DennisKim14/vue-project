const MongoClient = require('mongodb').MongoClient
    , DBHelper = require('../helper/Database')
    , Config = require('../config/Constant')

let MongoDBClient;
module.exports = {
    conn: {},
    initialize: () => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log('DB INITIALIZE');
                const mongoClient = await MongoClient.connect(
                    DBHelper.getConnectionSimpleUrl(),
                    {
                        // auth: {
                        //     user: Config.DATABASE.USER_ID,
                        //     password: Config.DATABASE.USER_PASS
                        // },
                        // poolSize: Config.DATABASE.POOL_SIZE,
                        // useNewUrlParser: true,
                        // useUnifiedTopology: true,
                        // replicaSet: Config.DATABASE.REPLI_NAME,
                        // connectTimeoutMS: 300000,
                        // readPreference: 'nearest'
                    });
                MongoDBClient = mongoClient;
                resolve({
                    application: mongoClient.db(Config.DATABASE.NAME)
                });
            } catch (err) {
                reject(err);
            }
        })
    },

    startTransaction: () => {
        const session = MongoDBClient.startSession();
        session.startTransaction();
        return session;
    },

    commitTransaction: (session) => {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await session.commitTransaction();
                resolve(rs);
            } catch(err) {
                console.log(err);
                reject(err);
            }
        });
    },

    endTransaction: (session) => {
        session.endSession();
    },

    abortTransaction: (session) => {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await session.abortTransaction();
                resolve(rs);
            } catch (err) {
                reject(err);
            }
        });
    }
}