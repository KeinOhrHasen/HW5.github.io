const router = require('express').Router();
const UserService = require('../services/messages');

router.get('/', (req, res) => {
    return UserService.getAll()
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            res.sendStatus(400);
        })
});

router.get('/:id', (req, res) => {
     return UserService.getMessageById(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            res.sendStatus(400);
        })
});

router.post('/', (req, res) => {
    return UserService.createMessage(req.body)
    .then((data) => res.status(201).send(data))
    .catch((err) => {
        res.sendStatus(400);
    })
});

router.put('/:id', (req, res) => {
    return UserService.updateMessage(req.params.id, req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
        res.sendStatus(404);
    })
});

router.delete('/:id', (req, res) => {
    return UserService.deleteMessage(req.params.id)
        .then((data) => res.sendStatus(200))
        .catch((err) => {
            res.sendStatus(400);
        })
});


module.exports = router;