"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
const router = (0, express_1.Router)();
//archivo de rutas para tareas
router.get('/', task_controller_1.getTasksController);
router.post('/', task_controller_1.addTasksController);
router.put('/:id', task_controller_1.udpdateTasksController);
router.delete('/:id', task_controller_1.deleteTasksController);
exports.default = router;
