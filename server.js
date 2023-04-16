var express = require('express');
var app = express();

app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
})
