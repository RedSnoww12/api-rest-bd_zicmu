const Cours = require("../models/cours.model.js");

// Create and Save a new Cours
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a Cours
    const cours = new Cours({
      idProf: req.body.idProf,
      idInstrument: req.body.idInstrument,
      jourDate: req.body.jourDate,
      nbPlace: req.body.nbPlace

    });

    // Save Cours in the database
    Cours.create(cours, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Cours."
        });
      else res.send(data);
    });
};

// Retrieve all Courss from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;
  Cours.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
exports.findAllPublished = (req, res) => {
  Cours.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
// Find a single Cours with a id
exports.findOne = (req, res) => {
  Cours.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cours with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Cours with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
// find all published Cours
exports.findAllPublished = (req, res) => {
  
};
// Update a Cours identified by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Cours with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Courss from the database.
exports.deleteAll = (req, res) => {
  
};
