const { Role } = require('../models');

exports.create = (req, res) => {
  Role.create(req.body).then(role => res.status(201).send(role));
};

exports.findAll = (req, res) => {
  // TODO: Support pagination
  Role.findAll({ attributes: ['name', 'description'], order: ['name'] })
    .then(roles => res.status(200).send(roles));
};

exports.deleteAll = (req, res) => {
  if (process.env.NODE_ENV === 'test') {
    Role.truncate({ cascade: true, restartIdentity: true })
      .then(() => res.status(200).send({ message: 'No more roles' }));
  } else {
    res.status(403).send({ message: 'Whoa there' });
  }
};
