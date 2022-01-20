const router = require('express').Router();
const Razorpay = require('razorpay')
var instance = new Razorpay({
    key_id: 'rzp_test_Fgu3ru1fIy4Fko',
    key_secret: 'zrKVPjNGUxsRwpb3bu7w3lfg',
  });
router.post('/', (req, res) => {
    instance.orders.create({
        amount: req.body.amount*100,
        currency: "INR",
        receipt: "TM"+ Date.now().valueOf()
      }).then((response) => {
          res.json({success: true, data: response})
      }).catch((err) => {
          res.json({success: false, messgae: "payment gatway error"})
      })
})

module.exports =  router;