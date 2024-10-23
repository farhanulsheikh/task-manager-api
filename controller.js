let tasks = [];


// add new task
exports.addTask = (req,res)=>{
    console.log('Received a POST request for /tasks');

    const {title,description} = req.body;

    // check if title is there, if not send bad request status
    if(!title){
        return res.status(400).json({error:'Title is required'});
    }

    // create object called newtask with the info from req object
    const newTask = {
        id:tasks.length+1,
        title,
        description: description || "No description",
    };

    // Put the new task in the tasks array
    tasks.push(newTask);

    //send response of 201 and confirm task was added
    res.status(201).json({
        message:'Task was Added',
        task:newTask,
    })


}

// Get all tasks
exports.getAllTasks=(req,res)=>{
    console.log('Received a GET request for /tasks');
    res.status(200).json({
        message:'List of all Tasks',
        tasks:tasks,
    });

}


//Get task by ID
exports.getTaskById= (req,res)=>{
    // Extract task ID from the request params
    const taskID = parseInt(req.params.id);

    // Find the task in the list of tasks
    const task = tasks.find(t=>t.id === taskID)

    // if task not found send 404 error
    if(!task){
        return res.status(404).json({error:'Task not Found'})

    }

    //return the task
    res.status(200).json(task)

}


// Update a Task

exports.updateTaskById=(req,res)=>{
    // Extract task ID from the request params
    const taskID = parseInt(req.params.id);
    const {title,description} = req.body;

    // Find the task in the list of tasks
    const task = tasks.find(t=>t.id === taskID)

    // if task not found send 404 error
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    // update the details of the task
    if(title) task.title= title;
    if(description) task.description = description;

    // return update message 
    res.status(200).json({
        message:'task was updated'
    })

}

exports.deleteTaskById = (req,res)=>{
    // Extract task ID from the request params
    const taskID = parseInt(req.params.id);

    // Find  index of the task in the list of tasks
    const taskIndex = tasks.findIndex(t=>t.id === taskID)

    // if task not found send 404 error
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    //get task title
    let title = tasks[taskIndex].title

    // Remove the task from the array
    tasks.splice(taskIndex,1)

    // send task deleted message
    res.status(200).json({
        message:`task '${title}' has been deleted`
    })

}