const router = require('express').Router();
const Product = require('../models/product')
router.post('/', (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        image:req.body.image,
        price:req.body.price,
    })
    product.save()
           .then((_) => {
               res.json({success: true, message: "Product has been listed"})
           }).catch((err) => {
            res.json({success: false, message: "Server error"})
           })
})

router.get('/', (req, res) => {
    Product.find({})
           .exec()
           .then((result) => {
               res.json({success: true, data: result})
           }).catch((err) => {
               res.json({success: false, message: "Server error" })
           })
});

module.exports = router;

// keyId: rzp_test_Fgu3ru1fIy4Fko
// keySecret : zrKVPjNGUxsRwpb3bu7w3lfg