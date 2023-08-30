const DB = require('../core/Database')
    , Response = require('../core/Response');

const BaseModelForMongo = function (collection) {
    this.collectionName = collection;
}

BaseModelForMongo.prototype = {

    aggregate: function(pipe, options) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await DB.conn.application.collection(this.collectionName).aggregate(pipe, options);
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    count: function (filter, isEstimate) {
        return new Promise(async (resolve, reject) => {
            try {
                if (isEstimate) {
                    const rs = await DB.conn.application.collection(this.collectionName).estimatedDocumentCount(filter);
                    resolve(rs);
                } else {
                    const rs = await DB.conn.application.collection(this.collectionName).countDocuments(filter);
                    resolve(rs);
                }
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    create: function (object, options) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await DB.conn.application.collection(this.collectionName).insertOne(object, options);
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    findOne: function (filter, project, options = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                options.projection = project;
                const rs = await DB.conn.application.collection(this.collectionName).findOne(filter, options);
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    findOneAndUpdate: function (filter, update, project, options = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                options.projection = project;
                const rs = await DB.conn.application.collection(this.collectionName).findOneAndUpdate(filter, update, options);
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    findMany: function (filter, project, offset, count, sort) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await DB.conn.application.collection(this.collectionName).find(filter).sort(sort).project(project).skip(Number(offset)).limit(Number(count)).toArray();
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    update: function (filter, update, options) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await DB.conn.application.collection(this.collectionName).updateOne(filter, update, options);
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    updateMany: function (filter, update, options) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await DB.conn.application.collection(this.collectionName).updateMany(filter, update, options);
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    delete: function (filter, options) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await DB.conn.application.collection(this.collectionName).deleteOne(filter, options);
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    },

    deleteMany: function (filter, options) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await DB.conn.application.collection(this.collectionName).deleteMany(filter, options);
                resolve(rs);
            } catch (err) {
                reject(Response.get(Response.type.DATABASE_ERROR, err.message));
            }
        });
    }
};

module.exports = BaseModelForMongo;
