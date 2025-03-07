const req = require('express/lib/request');
const taskModel = require('../models/tasksModel');

const getAll  = async (request, response) =>{

    const tasks = await taskModel.getAll();
    return response.status(200).json(tasks);
}

const createTasks = async (request, response) => {
    const createdTask = await taskModel.createTasks(request.body);

   return response.status(201).json(createdTask);
}

const deleteTask = async(request, response) => {

    const { id } = request.params;
    await taskModel.deleteTask(id);
    return response.status(204).json();
}

const updateTask = async(request, response) => {

    const { id } = request.params;

    await taskModel.updateTask(id, request.body);
    return response.status(204).json()
}

module.exports = {
    getAll,
    createTasks,
    deleteTask,
    updateTask
}