const express=require('express')
const Personal=require('../models/personal')
const User=require('../models/user')
const PhysicalRecord=require('../models/physicalRecords')
const router=express.Router()

//Register the user information
router.post('/register',async(req,res)=>{
    const personal=new Personal({...req.body})
    try{

        await personal.save()
        res.status(201).send(personal)
    }
    catch(e){
        console.log(e);
        res.status(400).send(e.errors)
    }
})  

//GET user
router.get('/user/:id',async(req,res)=>{
    try{

        const user=await Personal.findById(req.params.id)
        if(!user){
            res.status(404).send("User not found or does'nt exist")
        }
        res.status(202).send(user)
    }
    catch(e){
        res.status(404).send(e)
    }
})

//Create physical record
router.post('/user/physical-record',async(req,res)=>{
    const record=new PhysicalRecord({...req.body})
    try{

        await record.save()
        res.status(201).send(record)
    }
    catch(e){
        res.status(400).send(e.errors)
    }
})

//GET specific physical records of user
router.get('/user/physical-record/:id',async(req,res)=>{
    try{
        const records=await PhysicalRecord.find({user_id:req.params.id})
        if(!records){
            return res.status(404).send("No records Exist")
        }
        res.status(202).send(records)
    }
    catch(e){
        res.status(404).send(e)
    }
})

//GET all physical records of user
router.get('/user/physical-record',async(req,res)=>{
    try{
        const records=await PhysicalRecord.find({})
        if(!records){
            return res.status(404).send("No records Exist")
        }
        res.status(202).send(records)
    }
    catch(e){
        res.status(404).send(e)
    }
})



module.exports=router