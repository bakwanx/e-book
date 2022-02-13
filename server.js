const Express = require('express');
const Req = require('express/lib/request');
const App = Express();
const Port = 7777;
const Morgan = require('morgan');
const Routing = require('./routes/routes');
const Cors = require('cors');
const fileUpload = require('express-fileupload');
const Dotnv = require('dotenv');
Dotnv.config({path:'./config/Config.env'});

App.use(fileUpload());
App.use(Cors());
App.set('view engine', 'ejs');
App.use(Express.static(__dirname+'/public'));
App.use(Morgan('dev'));
App.use(Express.json());
App.use(Express.urlencoded({extended:true}));

const ConnectDB = require('./module/Connections');
ConnectDB();

App.listen(Port, function(){
    console.log('Server is running port '+ Port);
});

App.use('/', Routing);