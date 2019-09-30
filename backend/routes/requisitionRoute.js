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
        AccountNo:req.body.AccountNo,
        createdAt:req.body.createdAt
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


module.exports = router;
