const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var artikelController = require('./controllers/artikelController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Server started at port : 3000'));


app.use('/artikles', artikelController);