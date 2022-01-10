const express = require('express');
const router = express.Router();
const uploader = require('../config/cloudinary')
const Label = require('../models/label.model')
//Artist routes
const Artist = require('../models/artist.model')

const renderArtistPage = async (req,res,next) => {
    try {const artists = await Artist.find()
    res.render('artists.hbs', 
    {artists: artists}
        )}
    catch (err){console.error(err)} 
}

const creatArtist = async (req,res,next) => {
    try {const creation = await Artist.create({
        name : req.body.name,
        isBand : req.body.isBand === "on"? true : false,
        description : req.body.description,
        picture:req.file.path
    })

        //console.log(creation);
       res.redirect('/dashboard/artist');
       
        }
    catch (err){
    console.error(err);
    //res.redirect('/create');
    } 
}

router.get('/', renderArtistPage);
router.get('/create', (req,res)=> res.render('artists/artistCreate'));
router.post('/create',uploader.single("picture"), creatArtist);
router.get('/delete/:id', (req,res) => {
    Artist.findByIdAndDelete(req.params.id)
    .then((dbRes) => {
        console.log(dbRes);
        res.redirect('/dashboard/artist');
    })
    .catch((err) => {
        console.log(err);
    })
});

router.get('/update/:id', async(req,res,next)=>{
    try{
       const dbResp = await Artist.findById(req.params.id);
       res.render('artists/artistUpdate', {artist : dbResp})
    }catch(err){ 
        console.error(err);
    }
})

router.post("/update/:id", async(req,res,next)=>{
    try{
        await Artist.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.redirect('/dashboard/artist')
    }catch(err){
        console.error(err);
    }
})



module.exports = router
