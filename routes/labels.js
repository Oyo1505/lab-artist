const express = require('express');
const router = express.Router();

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
       await Label.create(req.body);
        res.redirect('/dashboard/labels')
    }catch(err){
        console.error(err)
    }
}
router.get('/',renderLabelsList )
router.get('/create', (req, res) => res.render('labels/createLabels'))
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

module.exports = router
