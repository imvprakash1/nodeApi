const mongoose=require('mongoose')
const Personal=require('./personal')

const physicalRecordSchema=mongoose.Schema({
    bloodPressure:{
        type:Number,
    },
    pulseRate:{
        type:Number,
    },
    breathingRate:{
        type:Number,
    },
    temperature:{
        type:Number,
    },
    eyeSight:{
        type:String,
        trim:true
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number
    },
    bloodSugarF:{
        type:Number
    },
    bloodSugarN:{
        type:Number
    },
    note:{
        type:String,
        required:true,
        trim:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Personal'
    }
},
{
    strict:false,
    timestamps:true
})


const physicalRecord=mongoose.model('physicalRecord',physicalRecordSchema)

module.exports=physicalRecord