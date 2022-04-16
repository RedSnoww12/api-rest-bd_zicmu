const express = require('express');
const cors = require("cors");
//var mysql = require('mysql');
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Sacha application." });
});

require("./routes/cours.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



// const apiRouter = require('./routes');
// const fs = require('fs');

// //db connexion
// try {
//     var conn = mysql.createConnection({
//         database: 'bd-zicmu',
//         host: "localhost",
//         user: "root",
//         password: ''
//     });
    
//     conn.connect( () => {
//     console.log("DB Connected!");
//     });
// } catch (err) {
//     throw err;
// }
  

// // Middleware
// app.use(express.json())

// app.use('/api', apiRouter);


// app.listen(8080, () => {
//     console.log('Serveur à l\'écoute')
//   })