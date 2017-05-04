var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(3000, function () {
    console.log("server started on port 3000");
});