const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const {title, description} = req.body;
    const task = new Task({title,description});
    await task.save();
    res.json({status: 'Task Update'});
});

//UPDATE
router.put('/', async (req, res) => {
    const {title, description} = req.body;
    const newtask = ({title,description});
    Task.findByIdAndUpdate(req.params.id , newtask)
    res.json({status: 'Task Update'});
});

//DELETE
router.delete('/', async (req, res) => {
await   Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Delete'});
});

router.get('/', async (req, res) => {
   const task = await  Task.findById(req.params.id);
 } );


module.exports = router;