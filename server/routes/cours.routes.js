module.exports = app => {
    const cours = require("../controllers/cours.controller.js");
    var router = require("express").Router();

    // Create a new Cours
    router.post("/", cours.create);

    // Retrieve all Cours
    router.get("/", cours.findAll);

    // Retrieve all published Cours
    router.get("/published", cours.findAllPublished);

    // Retrieve a single Cours with id
    router.get("/:id", cours.findOne);

    // Update a Cours with id
    router.put("/:id", cours.update);

    // Delete a Cours with id
    router.delete("/:id", cours.delete);

    // Delete all Cours
    router.delete("/", cours.deleteAll);

    app.use('/api/cours', router);
  };