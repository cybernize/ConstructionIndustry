const express =  require('express');
const router = express.Router();
const Supplier = require('../models/supplier');


//Get all the SUPPLIERS Deatails
router.get('/',async (req,res)=>{
    try{
        const addSupplier = await Supplier.find();
        res.json(addSupplier);
    }catch(err){
        res.json({message:err});
    }
   
});

// Sumbit a SUPPLIERS Details
router.post('/',async (req,res)=> {
 //  console.log(req.body);
    const SupplierDetails = new Supplier({
        companyName:req.body.companyName,
        siteName:req.body.siteName,
        email:req.body.email,
        regNo:req.body.regNo,
        cNo:req.body.cNo,
        cPerson:req.body.cPerson,
       
    });

    SupplierDetails.save()
    .then(data =>{
        res.json(data);
       console.log('save data to db');
    })
    .catch(err=> {
        res.json({message:err});
    })

});

// Delete SUPPLIERS in the List
router.delete('/:supplierId',(req,res)=>{
    Supplier.remove({_id:req.params.supplierId})
        .then(res =>{
            res.json(res)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;
