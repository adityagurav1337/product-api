var express = require("express");
var Product = require ("../modelas/Products");

var router = express.Router();

router.put("/", (req, res)=>{
    let body = req.body;
    console.log(body);
    let product = new Product();
    product.title = body.title;
    product.mrp = body.mrp;
    product.price = body.price;
    product.description = body.description;
    
    product.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
    
});

router.get("/",(req, res)=>{
    let product = new Product();
    product.list().then((result)=>{
        res.end(JSON.stringify({status:"success", result:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/:id", (req,res)=>{
 let product = new Product();
 product.id = req.params.id;
 product.get().then((result)=>{
    res.end(JSON.stringify({status:"success", data:result}));
}, (err)=>{
    res.end(JSON.stringify({status:"failed", data:err}));
});
});

router.post("/",(req,res)=>{
    let body = req.body;
    console.log(body);
    let product = new Product();
    product.id = body.id;
    product.title = body.title;
    product.mrp = body.mrp;
    product.price = body.price;
    product.description = body.description;
    product.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
});

router.delete("/:id", (req,res)=>{
    let product = new Product();
    product.id = req.params.id;
    product.delete().then((result)=>{
    res.end(JSON.stringify({status:"success", data:result}));
}, (err)=>{
    res.end(JSON.stringify({status:"failed", data:err}));
});
});

module.exports=router;