const Board = require('../service/Board')

module.exports = {

    add: (title, contents) => {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await Board.add(title, contents);
                resolve(rs.body);
            } catch(err) {
                reject(err)
            }
        })
    },
    
    list: (offset, count) => {
        return new Promise(async (resolve, reject) => {
            try {
                const list = await Board.list(offset, count);
                resolve({list: list});
            } catch(err) {
                reject(err)
            }
        })
    },
    
    get: (board_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const board = await Board.get(board_id);
                resolve({board: board});
            } catch(err) {
                reject(err)
            }
        })
    },

    modify: (board_id, title, contents) => {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await Board.modify(board_id, title, contents);
                resolve(rs);
            } catch(err) {
                reject(err)
            }
        })
    },

    delete: (board_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await Board.delete(board_id);
                resolve(rs);
            } catch(err) {
                reject(err)
            }
        })
    },

}