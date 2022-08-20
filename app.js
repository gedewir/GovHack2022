const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.listen(3000);

var indexRouter = require('./routes/index');
var challengesRouter = require('./routes/challenges');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/Challenges', challengesRouter);
