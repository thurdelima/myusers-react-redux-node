require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const usersAPI = require('./components/users/usersAPI');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = 'mongodb+srv://thurdelima:thurdelima@cluster0.h8m3ool.mongodb.net/test?retryWrites=true&w=majority&authSource=admin';
//process.env.DATABASE;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Database'))
  .catch(err => {
    throw new Error(err)
  });

app.use(passport.initialize());

require('./components/users/usersPassport')(passport);

app.use('/api/users', usersAPI);

//process.env.API_PORT

app.listen(8001 , () => {
  //${process.env.API_PORT}
  console.log(`Server running on port 8001`);
});