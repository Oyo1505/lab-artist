const {model, Schema } = require('mongoose')

const labelSchema = new Schema ({
    name: {type: String, unique : true},
    city: String,
    country: String,
    street: String,
    streetNumber : Number,
    zipCode: String,
    logo : {type: String, default : "https://cdn6.aptoide.com/imgs/1/4/c/14c166cc3cd2cac8da4809024ba82d0e_icon.png"}
   
})

const LabelModel  = model('Label', labelSchema);

module.exports = LabelModel;