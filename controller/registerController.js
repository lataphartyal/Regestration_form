const registerModel = require("../models/registerModel.js");
const mongoose = require("mongoose");
const createUser = async function(req,res){
        try {
            const data = req.body;
            if (!data.title) {
                return res.status(400).send({status:false,msg:"title is required field"})
            }
            if (!data.name) {
                return res.status(400).send({status:false,msg:"name is required field"})
            }
            if (!data.phone) {
                return res.status(400).send({status:false,msg:"phone is required field"})
            }
            const duplicatePhone = await registerModel.findOne({phone:data.phone});

            if (duplicatePhone) {
                return res.status(400).send({status: false,msg:"phone already exist"});
            }
            if (!data.email) {
                return res.status(400).send({status:false,msg:"email is required field"})
            }
            const duplicateEmail = await registerModel.findOne({email:data.email});
            
            if(duplicateEmail){
                return res.status(400).send({status: false,msg:"email already exist"});
            }
            if (!(data.password.length > 8 && data.password.length < 15)) {
                return res.status(400).send({status:false,msg:"password length should be  between 8 to 15 characters"});
            }
            const usercreated = await registerModel.create(data);
            res.status(201).send({status: true,message:"user created succeessfully",data  : usercreated});
        } 
        catch (error) {
            return res.status(500).send({msg:error.message});
        }
}
module.exports.createUser=createUser;