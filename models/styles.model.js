const {model, Schema } = require('mongoose')

const styleSchema = new Schema ({
    name: {type: String, unique : true},
    color:{type: String, default : "#000"},
    wikiURL:String,
})

const StyleModel  = model('Label', styleSchema);

module.exports = StyleModel;