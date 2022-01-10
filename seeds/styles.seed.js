require("./../db/index")

// const async = require("hbs/lib/async");
const Style = require("../models/styles.model");

const styles = [{
    name: "hardcore",
    color:"#FFF",
    wikiURL:"https://fr.wikipedia.org/wiki/Punk_hardcore",
},
{
    name: "Country",
    color:"green",
    wikiURL:"https://fr.wikipedia.org/wiki/Musique_country",
},
{
    name: "Classic",
    color:"blue",
    wikiURL:"https://fr.wikipedia.org/wiki/Musique_classique",
}
];

(async function(){
    try{
        await Style.deleteMany();
        const res=  await Style.create(styles);
        console.log(res.length + "Styles created")
        process.exit()
    }catch(err){
        console.log(err)
        process.exit()
    }
})()
