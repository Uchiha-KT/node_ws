var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.getConnection(function(err,connection){
        connection.query('SELECT * FROM mahasiswa',function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );
            res.render('index', { title: 'Belajar Node.js dengan SB-Admin 2.0',data:rows });
        });
    });
});

module.exports = router;

/*
* req.getConnection(function(err,connection){

 connection.query('SELECT * FROM customer',function(err,rows)     {

 if(err)
 console.log("Error Selecting : %s ",err );

 res.render('customers',{page_title:"Customers - Node.js",data:rows});

 });

 });
* */