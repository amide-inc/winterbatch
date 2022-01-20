const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');


router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            return res.json({success: false, message: "Hash not found"})
        }
        const user = new User({
            displayName: req.body.displayName,
            email: req.body.email,
            password:hash,
        });
        user.save()
            .then((_) => {
                res.json({success: true, message:"Account has been created"});
            }).catch((err) => {
                if(err.code === 11000) {
                    return res.json({success: false, message: "Email already Exits"})
                }
                res.json({success: false, message:"Auth Failed"});  
            })
    });
    
});

router.post('/login', (req, res) => {
    User.findOne({email: req.body.email})
        .exec()
        .then((user) => {
            if(!user) {
                return res.json({success: false, message: "User not found"});
            }
            bcrypt.compare(req.body.password, user.password, (err, rb) => {
                if(rb) {
                    const payload = {
                        userId: user._id,
                    }
                    const token = JWT.sign(payload, "codex")
                    res.json({success: true, token:token, message: "Login Successfully"})
                }else{
                    return res.json({success: false, message:"Password donot matched"})
                }
            })
        }).catch((err) => {
            res.json({success: false, error: err})
        })
});

router.get('/profile', checkAuth, (req, res) => {
    const id = req.userData.userId
    User.findById(id)
        .exec()
        .then((user) => {
            if(user) {
                return res.json({success: true, data: user})
            }
            res.json({success: false, message: "Auth Failed"});
        }).catch((err) => {
            res.json({success: false, message: "Auth Faild"})
        })
});

router.post('/payment', (req, res) => {
    //do somhing here
})

module.exports = router;