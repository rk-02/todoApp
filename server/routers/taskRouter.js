const express = require('express');
const taskController = require('../controllers/taskController.js');
const taskRouter = express.Router();

taskRouter.post("/create", taskController.create);
taskRouter.get('/get', taskController.get);
taskRouter.post("/update", taskController.update);
taskRouter.post("/delete", taskController.delete);

module.exports = taskRouter;