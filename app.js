var express = require('express');
var app = express();

app.use(express.static('public'));				// Pages are static, so app.use figures it out by itself. 

var server = app.listen(3000, () => {
	console.log('App is running on port 3000')
});