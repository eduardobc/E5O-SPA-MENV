const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const APIRouter = require('./router/api-router');


// to use node promises instead of mongodb promises
mongoose.Promise = global.Promise;


// databse
mongoose.connect('mongodb://localhost/E5OSPAMENV', {
    useMongoClient: true
}).then(() => console.log('== connected to E5OSPAMENV DB =='));


// settings
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());


// moddlewares
app.use(cors());
app.use(bodyParser.json());


// routes
app.use('/api', APIRouter);


// statis files
app.use(express.static(path.join(__dirname, 'public')))


// start server
app.listen(app.get('port'), () => {
    console.log('== server running on port: localhost:', app.get('port'));
});

