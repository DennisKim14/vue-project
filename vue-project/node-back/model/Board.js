const BaseModelForMongo = require('./BaseModelForMongo')
    , Util = require('util')

function BoardModel() {
    BaseModelForMongo.call(this, 'Board');
    return this;
}

Util.inherits(BoardModel, BaseModelForMongo);
BoardModel.prototype.schema = function (title, contents) {
    const board = {
        title: title,
        contents: contents
    };
    return board;
};

module.exports = new BoardModel();
