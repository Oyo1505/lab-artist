const express = require('express');
const router = express.Router();

//labels routes

const Style = require('../models/styles.model')

const renderStylesList = async (req, res) => {
    try{
        const styles = await Style.find()
        res.render('styles.hbs', {
            styles
        });
    }catch(err){
        console.error(err)
    }
}

const createStyle = async ( req, res) =>{
    try{
       await Style.create(req.body);
        res.redirect('/dashboard/styles')
    }catch(err){
        console.error(err)
    }
}
router.get('/',renderStylesList )
router.get('/create', (req, res) => res.render('styles/createStyle'))
router.post('/create', createStyle);


router.get('/delete/:id', async (req, res) => {
    try{
        await Style.findByIdAndDelete(req.params.id);
        res.redirect('/dashboard/styles')
    }catch(err){
        console.error(err)
        res.redirect('/dashboard/styles')
    }
})

module.exports = router

