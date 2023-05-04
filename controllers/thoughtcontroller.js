const { Users, Thoughts } = require("../models");

const thoughtsController = {
    getAllThoughts(req, res) { Thoughts.find({}).then((data) => res.json(data))},
    getThought(req, res) {Thoughts.findOne({ _id: params.id }).then((data) => res.json(data)) },
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction


};

module.exports = thoughtsController;