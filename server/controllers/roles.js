const { Role } = require('../models');

exports.create = (req, res) => {
  Role.create(req.body).then(role => res.status(201).send(role));
};

exports.findAll = (req, res) => {
  Role.findAll({ attributes: ['name', 'description'] }).then(roles => res.status(200).send(roles));
};
