require("./../db/index")

// const async = require("hbs/lib/async");
const Artist = require("../models/artist.model");

const artists = [{
    name: "Turnstile",
    isBand :true,
    description: "punk/hardcore music from usa",
    picture : "https://substreammagazine.com/wp-content/uploads/2019/01/turnstile.jpg"
},
{
    name : "Alix",
    isBand : false,
    description : " artist like Yoko Ono",
    picture : "https://www.interviewmagazine.com/wp-content/uploads/2013/11/img-yoko-ono_164529565908-735x1000.jpg"
},
{
    name : "Rolling Stones",
    isBand : true,
    description : "Really old band",
    picture : "https://www.rotka.org/wp-content/uploads/2020/04/the_rolling_stones_band.jpg"
}
];

(async function(){
    try{
        await Artist.deleteMany();
        const res=  await Artist.create(artists);
        console.log(res.length + "Artists created")
        process.exit()
    }catch(err){
        console.log(err)
        process.exit()
    }
})()
