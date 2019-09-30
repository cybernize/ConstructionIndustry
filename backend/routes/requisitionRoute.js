const express =  require('express');
const router = express.Router();
const Requisition = require('../models/requisition');


//Get all the REQUISITION Deatails
router.get('/',async (req,res)=>{
    try{
        const requisition = await Requisition.find();
        res.json(requisition);
    }catch(err){
        res.json({message:err});
    }
   
});

router.get('/toBeApprovedSup',async (req,res)=>{
    try{
        const requisition = await Requisition.find({$and:[{status: 0},{tprice: {$gte :100000}}]});
        res.json(requisition);
    }catch(err){
        res.json({message:err});
    }

});

router.get('/toBeApprovedSite',async (req,res)=>{
    try{
        const requisition = await Requisition.find({$and:[{status: 0},{tprice: {$lte :100000}}]});
        res.json(requisition);
    }catch(err){
        res.json({message:err});
    }

});

router.get('/isApproved',async (req,res)=>{
    try{
        const requisition = await Requisition.find({status: 1});
        res.json(requisition);
    }catch(err){
        res.json({message:err});
    }

});

router.get('/isDecline',async (req,res)=>{
    try{
        const requisition = await Requisition.find({status: 2});
        res.json(requisition);
    }catch(err){
        res.json({message:err});
    }

});

// Sumbit a REQUISITION Details
router.post('/',async (req,res)=> {
 //  console.log(req.body);
    const requDetails = new Requisition({
        siteName:req.body.siteName,
        itemName:req.body.itemName,
        type:req.body.type,
        quantity:req.body.quantity,
        perAgreedPrice:req.body.perAgreedPrice,
        perApprovedSupplier:req.body.perApprovedSupplier,
        tprice:req.body.tprice,
        AccountNo:req.body.AccountNo,
        createdAt:req.body.createdAt,
        status: req.body.status
    });

    requDetails.save()
    .then(data =>{
        res.json(data);
       console.log('save data to db');
    })
    .catch(err=> {
        res.json({message:err});
    })

    // try{
    //     const savedDetails = await regDetails.save();
    //     res.json(savedDetails);
    // }catch(err){
    //     res.json({message:err});
    // }
});

router.delete('/:requisitionId',(req,res)=>{
    Requisition.remove({_id:req.params.requisitionId})
        .then(res =>{
            res.json(res)
        })
        .catch(err => {
            res.json(err)
        })
});

router.get('/changeStatusApprove/:id',(req,res)=>{
    Requisition.update({_id:req.params.id}, {$set: {'status': 1}})
        .then(res =>{
            res.json(res)
        })
        .catch(err => {
            res.json(err)
        })
});

router.get('/changeStatusDecline/:id',(req,res)=>{
    Requisition.update({_id:req.params.id}, {$set: {'status': 2}})
        .then(res =>{
            res.json(res)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;
