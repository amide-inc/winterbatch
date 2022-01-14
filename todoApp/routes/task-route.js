const router = require('express').Router();
const Task = require('../models/task');
router.get('/', (req, res) => {
    Task.find()
        .exec()
        .then((result) => {
            if (result.length < 1) {
                return res.json({ success: false, message: "No data found" });
            }
            const data = result.map((doc) => {
                return {
                    id: doc._id,
                    title: doc.title,
                    description: doc.description,
                    baseUrl: '/task',
                    method: 'GET',
                    date: doc.date
                };
            })
            res.json({ success: true, data: data });
        }).catch((err) => {
            res.json({ success: false, message: "Server error, Try Again" })
        });
});

router.post('/', (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        date: Date.now().valueOf()
    });

    task.save()
        .then((result) => {
            res.json({ success: true, message: "Task has been saved" });
        }).catch((err) => {
            res.json({ success: false, message: "Task not saved", error: err });
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Task.findById(id)
        .exec()
        .then((result) => {
            if (result == null) {
                return res.json({ success: false, message: "No data found" });
            }
            res.json({ success: true, data: result });
        }).catch((err) => {
            res.json({ success: false, message: "Server error, Try Again" })
        });
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Task.updateOne({ _id: id }, { $set: data })
        .then((result) => {
            res.json({ success: true, message: "data has been updated" });
        }).catch((err) => {
            res.json({ success: false, message: "Server error" })
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Task.deleteOne({_id:id})
        .then((result) => {
            res.json({ success: true, message: "data has been deleted" });
        }).catch((err) => {
            res.json({ success: false, message: "Server error" })
        })
});

module.exports = router;