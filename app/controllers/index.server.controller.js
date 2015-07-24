exports.render = function(req, res) {
    //res.send('Hello World');
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();


   var mysql = require('mysql');
   var connection = mysql.createConnection({
        host:'localhost',
        user:'nodejs',
        password:'Vistaar123',
        database:'test'	
   });
    console.log('Reached renderer');
    try {

    	connection.connect();
        connection.query('select * from users', function(err, rows, fields) {
            if (err) throw err;
            console.log('Name is ', rows[0].firstname);

    res.render('index', {
        title: 'Node js first app',
        data:rows
    });
        });

        connection.end();
    } catch (err) {
        console.log(err);

    }


    /*res.render('index', {
        title: 'Node js first app'
    });/*

        /*req.getConnection(function(err,connection){
        	connection.query('select * from users',function(err,rows){
    	    	if(err){
    	    		console.log('Error ',err);
    	    		res.render('index',{
    	    			title:'Fetch from mysql',
    	    			data:rows
    	    		});
    	    	}
        	});
        }); */
};
