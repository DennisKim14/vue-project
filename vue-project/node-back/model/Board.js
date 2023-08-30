const BaseModelForMongo = require('./BaseModelForMongo')
    , Util = require('util')

function BoardModel() {
    BaseModelForMongo.call(this, 'Boards');
    return this;
}

/**
 * Index Information
 * * 기간과 상태를 통한 검색
 */
Util.inherits(BoardModel, BaseModelForMongo);
BoardModel.prototype.schema = function (title, contents) {
    const board = {
        title: title,
        contents: contents
    };
    return board;
};

module.exports = new BoardModel();
