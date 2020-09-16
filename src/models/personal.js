const mongoose=require('mongoose')
const validator=require('validator')
const User=require('./user')
const personalSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    adhaar:{
        type:String,
        required:true,
        validate(value){
            if(value.length<12 || value.length>12){
                throw new Error('Invalid Adhaar Number')
            }
        }
        
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        validate(value){
            if(value<0){
                throw new Error('Age cannot be negative')
            }
        }
    },
    dob:{
        type:Date,
        required:true
    },
    fatherName:{
        type:String,
        trim:true,
        required:true
    },
    motherName:{
        type:String,
        trim:true,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
    // ,
    // user_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:'User'
    // }
},{
    strict:true,
    timestamps:true
});

const Personal=mongoose.model('personal',personalSchema);

module.exports=Personal;
