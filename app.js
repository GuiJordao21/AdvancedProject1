const express = require('express'),
app =  express(),
mongodb = require('mongodb'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000,
myDB = 'mongodb://localhost/advancedProject1';

app.listen(port,(error) => {
    if(!error){
        console.log('listening on port ',port);
    }else{
        console.log(err);
    }
});