var Express = require('express');

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    console.log("*/**********",req.headers['authorization'])
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports.verifyToken= verifyToken;
