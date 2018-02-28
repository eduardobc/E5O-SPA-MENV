const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const APIRouter = require('./router/api-router');
const DashboardRouter = require('./router/dashboard-router');
const WebsiteRouter = require('./router/website-router');

const app = express();


// to use node promises instead of mongodb promises
mongoose.Promise = global.Promise;


// databse
mongoose.connect('mongodb://localhost/E5OSPAMENV', {
    useMongoClient: true
}).then(() => console.log('== connected to E5OSPAMENV DB =='));


// settings
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());

// template engine
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));


// moddlewares
app.use(cors());
app.use(bodyParser.json());


// routes
app.use('/', WebsiteRouter);
app.use('/admin', DashboardRouter);
app.use('/api', APIRouter);


// statis files
app.use(express.static(path.join(__dirname, 'public')))


// start server
app.listen(app.get('port'), () => {
    console.log('== server running on port: localhost:', app.get('port'));
});

