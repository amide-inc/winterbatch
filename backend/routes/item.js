const router = require('express').Router();
router.get('/amin', (req, res) => {
    res.send("item get route");
    //retrive
});
router.post('/', (req, res) => {
    res.send("item post route");
    //save
});
router.patch('/', (req, res) => {
    res.send("item pacth route");
    //update
});
router.delete('/', (req, res) => {
    res.send("item delete route");
    //delete
});

module.exports =  router;