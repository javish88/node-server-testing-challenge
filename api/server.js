const express = require("express");

const Users = require("../users/usersModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "working", dbenv: process.env.DB_ENV });
});


server.post("/", (req, res) => {
    Users.insert(req.body)
    .then(([id]) => {
    res.status(201).json(id);
    })
    .catch(error => {
    res.status(500).json({message: "Unable to add user"});
    });
});


server.delete('/:id', (req, res) => {
    const { id } = req.params;

Users.remove(id)
.then(deleted => {
    if (deleted) {
    res.status(200).json({ success: "user successfully deleted" });
    } else {
    res.status(404).json({ message: 'Could not find user with given id' });
    }
})
.catch(err => {
    console.log(err); 
    res.status(500).json({ error: 'failed to delete user' });
});
});

module.exports = server;
