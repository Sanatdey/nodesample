var express = require('express');
var app = express();
//var partials = require('express-partials');

app.set('view engine', 'ejs');
//app.use(partials());

app.use('/assets', express.static('assets'));


app.get('/',function(req,res){
    res.render('index');
});


app.get('/home',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/abhi',function(req,res){
    res.render('index1');
});

// app.get('/profile/:id',function(req,res){
//     res.send('You Want to see the id of ' + req.params.id)
// });

app.get('/profile/:name',function(req,res){
    var data = {name: req.params.name, lang: ['c','Python','js','Node']}
    res.render('profile', {data:data});
});


app.listen(3000);