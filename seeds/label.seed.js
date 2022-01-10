require("./../db/index")

// const async = require("hbs/lib/async");
const Label = require("../models/label.model");

const labels = [{
    name: "SuperSamir",
    city: "Paris",
    country: "France",
    street: "Boulevard Voltaire",
    streetNumber : 186,
    zipCode: "75011",

},
{
    name: "WonderAnna",
    city: "Manchester",
    country: "England",
    street: "Kings Street",
    streetNumber : 186,
    zipCode: "M20",

},
{
    name: "Patrick & HP",
    city: "Paris",
    country: "Texas",
    street: "Artusts Street",
    streetNumber : 186,
    zipCode: "75015",
}
];

(async function(){
    try{
        await Label.deleteMany();
        const res=  await Label.create(labels);
        console.log(res.length + "Labels created")
        process.exit()
    }catch(err){
        console.log(err)
        process.exit()
    }
})()
