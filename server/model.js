const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/niuren',{useNewUrlParser: true})

const models = {
    user: {
        'user': {type:String, require:true},
        'pwd': {type:String, require:true},
        'type': {type:String, require:true},
        'avatar': {type:String},
        'desc': {type:String},
        'title': {type:String},
        'company': {type:String},
        'money': {type:String},
    },
    chat: {

    }
}
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
    getModel(name){
        return mongoose.model(name)
    }
}