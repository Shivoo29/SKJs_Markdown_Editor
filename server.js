var express = require('express');
    var app = express();

    // set the view engine to ejs
    app.set('view engine', 'ejs');

    // public folder to store assets
    app.use(express.static(__dirname + '/public'));

    // routes for app
    app.get('/', function(req, res) {
      res.render('pad');
    });
    app.get('/(:id)', function(req, res) {
      res.render('pad');
    });

    // get sharejs dependencies
    var sharejs = require('share');
    require('redis');

    // options for sharejs
    var sharejs = {
      db: {type: 'redis'},
    };

    // attach the express server to sharejs
    sharejs.server.atach(app, options);


    // listen on port 8091 (for localhost) or the port defined for heroku
    var port = process.env.PORT || 8091;
    app.listen(port);