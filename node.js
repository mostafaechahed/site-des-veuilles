var express = require('express');  
var app = express();  
fs = require('fs');
app.get('/myform', function(req, res){  
    let myObject={
        date:req.query.date,
        sujet:req.query.sujet
      ,tags:req.query.tags,
      lien:req.query.lien,
      membres:req.query.apprenant
    }
    let data = fs.readFileSync('nodjs1.json');
    let users = JSON.parse(data);
    users.push(myObject);
    fs.writeFile('nodjs1.json', JSON.stringify(users), function (err) {
        if (err) return console.log(err);
      });
     
    
});  
app.listen(4000)