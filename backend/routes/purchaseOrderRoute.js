const express =  require('express');
const router = express.Router();
const PurchaseOrder = require('../models/purchaseOrder');


//Get all the PURCHASE ORDER Deatails
router.get('/',async (req,res)=>{
    try{
        const purchase = await PurchaseOrder.find();
        res.json(purchase);
    }catch(err){
        res.json({message:err});
    }
   
});

// Sumbit a PURCHASE ORDER Details
router.post('/',async (req,res)=> {
 //  console.log(req.body);
    const purchaseDetails = new PurchaseOrder({
        siteName:req.body.siteName,
        itemName:req.body.itemName,
        type:req.body.type,
        quantity:req.body.quantity,
        total:req.body.total,
        deliveryDate:req.body.deliveryDate
    });

    purchaseDetails.save()
    .then(data =>{
        res.json(data);
       console.log('save data to db');
    })
    .catch(err=> {
        res.json({message:err});
    })
});


router.delete('/:purchaseId',(req,res)=>{
    PurchaseOrder.remove({_id:req.params.purchaseId})
        .then(res =>{
            res.json(res)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;
