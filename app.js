const express = require('express'),
app =  express(),
mongodb = require('mongodb'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000,
myDB = 'mongodb://localhost/advancedProject1',
user = require('./Models/user.models.js');
userRoutes = require('./Controller/userroutes.js'),
bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect(myDB);
app.use('/user', userRoutes); //http://localhost:3000/user/<Route>

app.listen(port,(error) => {
    if(!error){
        console.log('listening on port ',port);
    }else{
        console.log(err);
    }
});