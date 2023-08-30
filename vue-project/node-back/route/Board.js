const Router = require('express').Router()
    , Board = require('../controller/Board');

Router.get('/', (req, res) => {
    Board.list(0, 10);
})

module.exports = Router;