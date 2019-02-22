const express = require('express');
require('dotenv').config()
const massive = require('massive');

const {json} = require('body-parser');
// const session = require('express-session');
const app = express()

//CONTROLLERS
const controller = require('./controller');

//env
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());

// app.use(
//     session({
//         secret: SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false
//     })
// );

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})




const PORT = SERVER_PORT
console.log(PORT)
app.listen(PORT, () => console.log(`hitting on ${PORT}`))