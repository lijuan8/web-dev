var express = require('express');
var app = express();
var path= require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(path.join(__dirname, 'public')));

require ("./test/app.js")(app);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'));
});