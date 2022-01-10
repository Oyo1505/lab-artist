
const express = require('express')
const router = express.Router();
const Artist = require('../models/artist.model')

const renderArtistPage = async (req,res,next) => {
    try {const artists = await Artist.find()
    res.render('artists.hbs', 
    {artists: artists}
        )}
    catch (err){console.error(err)} 
}

router.get('/', (req,res,next)=> res.render('dashboard'))

module.exports = router
