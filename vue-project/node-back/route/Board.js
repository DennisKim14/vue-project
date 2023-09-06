const Router = require('express').Router()
    , Board = require('../controller/Board');

Router.post('/add', (req, res) => {
    Board.add(req.body.title, req.body.contents).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return res.status(404).json({message: '에러뜸'});
    })
})

Router.get('/', (req, res) => {
    Board.list(0, 10).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return res.status(404).json({message: '에러뜸'});
    })
})

Router.get('/:_id', (req, res) => {
    Board.get(req.params._id).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return res.status(404).json({message: '에러뜸'});
    })
})

Router.put('/modify/:_id', (req, res) => {
    Board.modify(req.params._id, req.body.title, req.body.contents).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return res.status(404).json({message: '에러뜸'});
    })
})

Router.delete('/delete/:_id', (req, res) => {
    Board.delete(req.params._id).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return res.status(404).json({message: '에러뜸'});
    })
})


module.exports = Router;