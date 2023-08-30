const Board = require('../model/Board')

module.exports = {

    list: (offset, count) => {
        const filter = {}
        const sort = {date: -1}
        return Board.findMany(filter, offset, count, sort);
    }

}