const mysql = require('mysql');

const pool = mysql.createPool({
    connectoinLimit: 10,
    database: 'bd_zicmu',
    host: "localhost",
    user: "root",
    password: ''
});

let chirpprdb = {};

chirpprdb.LesCours = () => {
    
    return new Promise((resolve, reject) => {
        pool.query('Select person.id as pId, person.nom as pNom, person.prenom as pPrenom, person.adresse as pAdresse, person.telephone as pTel, person.mail as pMail, instrument.nom as iNom, jourDate, nbPlace, cours.id as cId from cours INNER JOIN professeur ON cours.idProf = professeur.id INNER JOIN person ON professeur.id = person.id INNER JOIN instrument ON cours.idInstrument = instrument.id WHERE nbPlace>0;', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    })

};

chirpprdb.LesStudents = () => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT person.id as pID, person.nom as pNom, person.prenom as pPrenom, person.telephone as pTel, person.adresse as pAdresse, person.mail as pMail, students.niveau as sNiveau from person INNER JOIN students on person.id = students.id;', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    })

};

chirpprdb.GetOneStudent = (id) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT nom, prenom, adresse, telephone, mail, students.niveau as sLvl from person INNER JOIN students on person.id = students.id where person.id = ?;', [id],
        (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    })

};

chirpprdb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from comptage.tmp where id = ?', [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    })
}

module.exports = chirpprdb;