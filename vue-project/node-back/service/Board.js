const Board = require('../model/Board')
    , ObjectID = require('mongodb').ObjectId;

module.exports = {

    add: (title, contents) => {
        const board = Board.schema(title, contents);
        return Board.create(board);
    },

    list: (offset, count) => {
        const filter = {};
        const sort = {date: -1};
        return Board.findMany(filter, {}, offset, count, sort);
    },

    get: (board_id) => {
        const filter = {_id: new ObjectID(board_id)};
        return Board.findOne(filter, {});
    },

    modify: (board_id, title, contents) => {
        const filter = {_id: new ObjectID(board_id)};
        const update = {
            $set: {
                title: title,
                contents: contents
            }
        };
        const options = {};
        return Board.update(filter, update, options);
    },

    delete: (board_id) => {
        const filter = {_id: new ObjectID(board_id)};
        return Board.delete(filter);
    },

}