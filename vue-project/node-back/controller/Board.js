const Board = require('../service/Board')

module.exports = {

    list: (offset, count) => {
        Board.list(offset, count);
    }

}