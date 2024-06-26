// const propertyModel = require('../models/properties');

// exports.createProperty = async(req,res)=>{
//     try{
//         const saveData = await new propertyModel(req.body).save();
//         res.json(saveData);
//     }
//     catch{(err)=>res.json(err)};
// }

// exports.getProperty = async(req,res)=>{
//     try{
//         const getusers = await propertyModel.find();
//         res.json(getusers);
//     }
//     catch{(err)=>res.json(err)};
// }
// exports.getP = async (req,res)=>{
//     try{
//         const user = await propertyModel.find({_id:req.params.id});
//         res.json(user);
//     }catch(err){
//         res.json({err});
//     }
// }
// exports.deleteP =(req,res)=>{
 
//     propertyModel.findOneAndDelete({_id:req.params.id},(err,data)=>{
//         if(err){
//             res.json({err});
//         }else{
//             res.json(data);
//         }
//     });
// }
// exports.updateP = (req,res)=>{
//     propertyModel.findOneAndUpdate({_id:req.params.userID} ,(req.body),{new:true},(err,data)=>{
//         try{
//             res.json(data);
//         }catch(err){
//             res.json({err});
//         }
//     })
// }




const propertyModel = require('../models/properties');

exports.createProperty = async (req, res) => {
    try {
        const saveData = await new propertyModel(req.body).save();
        res.json(saveData);
    } catch (err) {
        res.json({ err });
    }
}

exports.getProperty = async (req, res) => {
    try {
        const getusers = await propertyModel.find();
        res.json(getusers);
    } catch (err) {
        res.json({ err });
    }
}

exports.getP = async (req, res) => {
    try {
        const user = await propertyModel.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.json({ err });
    }
}

exports.deleteP = async (req, res) => {
    try {
        const data = await propertyModel.findOneAndDelete({ _id: req.params.id });
        res.json(data);
    } catch (err) {
        res.json({ err });
    }
}

exports.updateP = async (req, res) => {
    try {
        const data = await propertyModel.findOneAndUpdate({ _id: req.params.userID }, req.body, { new: true });
        res.json(data);
    } catch (err) {
        res.json({ err });
    }
}




// const propertyModel = require('../models/properties');

// Other controller functions...

// exports.getPropertyByLocation = async (req, res) => {
//     const { locationName } = req.params;
//     try {
//         const properties = await propertyModel.find({ location: locationName });
//         res.json(properties);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }

