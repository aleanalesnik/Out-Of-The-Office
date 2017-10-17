var express = require('express');
var app = express();


app.use(express.static('public'));



var server = app.listen(3000, ()=>{
	console.log('Website is running at port 3000.')
});