const express = require('express');
var app = express();

var path = require('path');

export function my_test(num1, num2) {
	return num1 + num2;
}

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(process.env.PORT || 8080)