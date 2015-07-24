exports.render = function(req, res) {
    //res.send('Hello World');
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    
    // res.render('index', {
    //     title: 'Node js first app'
    // });
    
    console.log('Reached renderer');
    req.getConnection(function(err,connection){
    	connection.query('select * from users',function(err,rows){
	    	if(err){
	    		console.log('Error ',err);
	    		res.render('index',{
	    			title:'Fetch from mysql',
	    			data:rows
	    		});
	    	}
    	});
    });
};
