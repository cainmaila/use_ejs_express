var express = require('express');
var app = express();
app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.render('index',{
        "title":"my test !!"
    });
});

app.listen(80);
console.log('Express app started on port 80');
