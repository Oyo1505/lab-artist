
const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const Artist = require('../models/artist.model')

const renderArtistPage = async (req,res,next) => {
    try {const artists = await Artist.find()
    res.render('artists.hbs', 
    {artists: artists}
        )}
    catch (err){console.error(err)} 
}

const creatArtist = async (req,res,next) => {
    console.log(req.body);
    try {const creation = await Artist.create({
        name : req.body.name,
        isBand : req.body.isBand === "on"? true : false,
        description : req.body.description
    })

        //console.log(creation);
       res.redirect('/dashboard/artist');
       
        }
    catch (err){
    console.error(err);
    //res.redirect('/create');
    } 
}

router.get('/', (req,res,next)=> res.render('dashboard'));
router.get('/artist', renderArtistPage);
router.get('/create', (req,res)=> res.render('artists/artistCreate'));
router.post('/create', creatArtist);
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

module.exports = router
