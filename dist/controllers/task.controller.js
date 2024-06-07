"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTasksController = exports.udpdateTasksController = exports.addTasksController = exports.getTasksController = void 0;
const date_fns_1 = require("date-fns");
const task_service_1 = require("../services/task.service");
//Listar tareas
const getTasksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield (0, task_service_1.getTasks)();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: 'No se pudo obtener el listado de tareas' });
    }
});
exports.getTasksController = getTasksController;
//Agregar tarea
const addTasksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //formateando fecha
        const currentDateTime = new Date();
        const formattedDate = (0, date_fns_1.format)(currentDateTime, 'dd/MM/yyyy HH:mm:ss');
        const newTask = {
            title: req.body.title,
            description: req.body.description,
            createdAt: formattedDate,
            status: req.body.status || false, //por defecto false si no se envia lo contrario
        };
        const taskResponse = yield (0, task_service_1.addTasks)(newTask);
        res.status(200).json({ message: taskResponse });
    }
    catch (error) {
        res.status(500).send("Ocurrió un error");
    }
});
exports.addTasksController = addTasksController;
//Actualizar tarea
const udpdateTasksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.id;
        const newTask = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || false,
        };
        const taskResponse = yield (0, task_service_1.updateTasks)(taskId, newTask);
        res.status(200).json({ message: taskResponse });
    }
    catch (error) {
        res.status(500).send("Ocurrió un error");
    }
});
exports.udpdateTasksController = udpdateTasksController;
//eliminar tarea
const deleteTasksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.id;
        const taskResponse = yield (0, task_service_1.deleteTasks)(taskId);
        res.status(200).json({ message: taskResponse });
    }
    catch (error) {
        res.status(500).send("Ocurrió un error");
    }
});
exports.deleteTasksController = deleteTasksController;
