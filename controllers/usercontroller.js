const { Users, Thoughts } = require("../models");

const usersController = {

    getAllUsers(req, res) { Users.find({}).then((data) => res.json(data))},
    getUser(req, res) {Users.findOne({ _id: params.id }).then((data) => res.json(data)) },
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend

};

module.exports = usersController;