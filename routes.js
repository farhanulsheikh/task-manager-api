const express = require('express')

const router = express.Router();

const taskcontroller = require('./controller')



// add new task
router.post("/",taskcontroller.addTask );

// Get all tasks
router.get('/', taskcontroller.getAllTasks);

//Get task by ID
router.get('/:id',taskcontroller.getTaskById);

// Update a Task
router.put('/:id', taskcontroller.updateTaskById)

//delete a task
router.delete("/:id",taskcontroller.deleteTaskById )


module.exports = router;