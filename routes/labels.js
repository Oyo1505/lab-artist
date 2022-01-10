const express = require('express');
const router = express.Router();
const uploader = require('../config/cloudinary')
//labels routes

const Label = require('../models/label.model')

const renderLabelsList = async (req, res) => {
    try{
        const labels = await Label.find()
        res.render('labels.hbs', {
            labels : labels
        });
    }catch(err){
        console.error(err)
    }
}

const createLabel = async ( req, res) =>{
    try{
       await Label.create({
        name : req.body.name,
        city : req.body.city,
        country : req.body.country,
        street : req.body.street,
        streetNumber : req.body.streetNumber,
        zipCode : req.body.zipCode,        
        logo:req.file.path  
       });
        res.redirect('/dashboard/labels')
    }catch(err){
        console.error(err)
    }
}
router.get('/',renderLabelsList )
router.get('/create', (req, res) => res.render('labels/createLabels'))
router.post('/create',uploader.single("logo"), createLabel);
router.post('/create', createLabel);


router.get('/delete/:id', async (req, res) => {
    try{
        await Label.findByIdAndDelete(req.params.id);
        res.redirect('/dashboard/labels')
    }catch(err){
        console.error(err)
        res.redirect('/dashboard/labels')
    }
})


router.get('/update/:id', async(req,res,next)=>{
    try{
       const dbResp = await Label.findById(req.params.id);
       res.render('labels/labelUpdate', {label : dbResp})
    }catch(err){ 
        console.error(err);
    }
})

router.post("/update/:id", async(req,res,next)=>{
    try{
        await Label.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.redirect('/dashboard/labels')
    }catch(err){
        console.error(err);
    }
})
module.exports = router
