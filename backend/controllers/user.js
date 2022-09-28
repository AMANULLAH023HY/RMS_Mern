const userModel = require('../models/user');

exports.createUser = async(req,res)=>{
    try{
        const saveData = await new userModel(req.body).save();
        res.json(saveData);
    }
    catch{(err)=>res.json(err)};
}

exports.getUser = async(req,res)=>{
    try{
        const getusers = await userModel.find();
        res.json(getusers);
    }
    catch{(err)=>res.json(err)};
}
exports.getU = async (req,res)=>{
    try{
        const user = await userModel.find({name:req.params.id});
        res.json(user);
    }catch(err){
        res.json({err});
    }
}
exports.deleteUser =(req,res)=>{
 
    userModel.findOneAndDelete({_id:req.params.id},(err,data)=>{
        if(err){
            res.json({err});
        }else{
            res.json(data);
        }
    });
}