const router = require('express').Router();
const Task = require('../models/task');
router.get('/', (req, res) => {
    const name = req.params.name;
    res.send("task get route : " + name);
});

router.post('/', (req, res) => {
    const task = new Task({
        title: "Todo App",
        description: "Working on todo app",
        date: Date.now().valueOf()
    });

    task.save();
    res.send("date saved");
});

router.get('/:id', (req, res) => {
    const name = req.params.name;
    res.send("task get route : " + name);
});

router.patch('/:id', (req, res) => {
    //update the task from this route
});

router.delete('/:id', (req, res)=> {
    //delete a task
});

module.exports = router;