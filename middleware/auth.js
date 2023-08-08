const jwt = require('jsonwebtoken');
const registerModel = require('../models/registerModel');

const authentication = async function (req, res, next) {
    try {
        const token = req.headers['x-api-keys'];
        if (!token){
            return res.status(400).send({ status: false, msg: "login is required, token set in header" })
    } 
        const decodedToken = jwt.verify(token, 'lata12')

if (!decodedToken) {
        return res.status(400).send({ status: false, msg: "token is invalid" })
    }
    next();
}
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
let authorization = async function (req,res,next) {
    try {
       let token = req.headers['x-api-keys'];
       let decodedToken = jwt.verify(token, 'lata12');
       let userId = req.params.userId;
       let user = await registerModel.findById(userId);
       if(!user){
        return res.status(401).send({status:false, msg:"There is no data with this user id"});
       }
if(decodedToken.userId!=user.userId){
    return res.status(401).send({status:false, msg:"you are not authorized"});
}
next();
    }
     catch (error) {
        res.status(500).send({msg:error.message})
    }
}
module.exports.authentication = authentication;
module.exports.authorization = authorization; 