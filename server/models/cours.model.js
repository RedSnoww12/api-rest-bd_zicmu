const sql = require("./db.js");

// constructor
const Cours = function(Cours) {
  this.idProf = Cours.idProf;
  this.idInstrument = Cours.idInstrument;
  this.jourDate = Cours.jourDate;
  this.nbPlace = Cours.nbPlace;
};

Cours.create = (newCours, result) => {
  sql.query("INSERT INTO cours SET ?", newCours, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Cours: ", { id: res.insertId, ...newCours });
    result(null, { id: res.insertId, ...newCours });
  });
};

Cours.findById = (id, result) => {
  sql.query(`SELECT * FROM cours WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Cours: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Cours with the id
    result({ kind: "not_found" }, null);
  });
};

Cours.getAll = (title, result) => {
  let query = "SELECT * FROM cours";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("cours: ", res);
    result(null, res);
  });
};

Cours.getAllPublished = result => {
  sql.query("SELECT * FROM cours WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("cours: ", res);
    result(null, res);
  });
};

Cours.updateById = (id, Cours, result) => {
  sql.query(
    "UPDATE cours SET title = ?, description = ?, published = ? WHERE id = ?",
    [Cours.title, Cours.description, Cours.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Cours with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated Cours: ", { id: id, ...Cours });
      result(null, { id: id, ...Cours });
    }
  );
};

Cours.remove = (id, result) => {
  sql.query("DELETE FROM cours WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Cours with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted Cours with id: ", id);
    result(null, res);
  });
};

Cours.removeAll = result => {
  sql.query("DELETE FROM cours", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} cours`);
    result(null, res);
  });
};

module.exports = Cours;
