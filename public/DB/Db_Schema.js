const mongoose=require('mongoose')
const Dbschema=new mongoose.Schema({
    Pdf:{type:String,required:true},

},{
    timestamps: true,
})
const Pdfmodel=mongoose.model('Pdf',Dbschema)
module.exports={Pdfmodel}