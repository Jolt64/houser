const express = require('express');
require('dotenv').config()
const massive = require('massive');

const {json} = require('body-parser');
const app = express()

//CONTROLLERS
const controller = require('./controller');

//env
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})


//endpoints

// app.get('/api/houses', ctrl.getHouses);



const PORT = SERVER_PORT
console.log(PORT)
app.listen(PORT, () => console.log(`hitting on ${PORT}`))