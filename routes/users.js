const router = require('express').Router();
const service = require('../services/users');

router.get('/', (req, res) => {
    return service.getAll()
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            res.sendStatus(400);
        })
});

router.get('/:id', (req, res) => {
    return service.getUserById(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            res.sendStatus(400);
        })
});

router.get('/:id/friends', (req, res) => {
    return service.getFriendsByUserId(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            res.sendStatus(400);
        })
});

router.post('/', (req, res) => {
    return service.createNewUser(req.body)
        .then((data) => res.status(201).send(data))
        .catch((err) => {
            res.sendStatus(400);
        })
});

router.put('/:id', (req, res) => {
    return service.updateUserInfo(req.params.id, req.body)
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            res.sendStatus(404);
        })
});

router.delete('/:id', (req, res) => {
    return service.deleteUser(req.params.id)
        .then((data) => res.sendStatus(200))
        .catch((err) => {
            res.sendStatus(400);
        })
});


module.exports = router;