const express = require('express')
const router = express.Router()

const { getAllTasks, updateTask, createTask, deleteTask, getTask } = require('../controllers/tasks')

// router.route('/').get((req, res) =>{
//     res.send(getAllTasks)
// })
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router