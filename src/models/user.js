const mongoose=require('mongoose')
const Personal=require('./personal')
const userSchema=mongoose.Schema({
    adhaar:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamp:true
})

// userSchema.virtual('user_id',{
//     ref:'Personal',
//     localField:'_id',
//     foreignField:'user_id'
// })



const User=mongoose.model('user',userSchema)
module.exports=User