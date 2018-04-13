const express = require('express');
const app = express();
const http = require('http').Server(app);
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    autoescape: true,
    express: app,
    watch: true
});

app.use(express.static(__dirname + '/src/assets'));

let port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.render('index.html', {

    })
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});