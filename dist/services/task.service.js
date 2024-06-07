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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTasks = exports.updateTasks = exports.addTasks = exports.getTasks = void 0;
const firebase_config_1 = __importDefault(require("../config/firebase.config"));
const tasksCollection = firebase_config_1.default.collection('tasks');
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield tasksCollection.get();
    const tasks = [];
    snapshot.forEach(doc => {
        const task = doc.data();
        task.id = doc.id;
        tasks.push(task);
    });
    return tasks;
});
exports.getTasks = getTasks;
const addTasks = (newTask) => __awaiter(void 0, void 0, void 0, function* () {
    const taskRef = yield firebase_config_1.default.collection('tasks').add(newTask);
    let message = "Tarea agregada correctamente";
    if (!taskRef.id) {
        message = "No se pudo agregar la tarea";
    }
    return message;
});
exports.addTasks = addTasks;
const updateTasks = (taskId, newTask) => __awaiter(void 0, void 0, void 0, function* () {
    const taskRef = firebase_config_1.default.collection('tasks').doc(taskId);
    yield taskRef.update({
        title: newTask.title,
        description: newTask.description,
        status: newTask.status
    });
    let message = "Tarea actualizada correctamente";
    if (!taskRef.id) {
        message = "No se pudo actualizar la tarea";
    }
    return message;
});
exports.updateTasks = updateTasks;
const deleteTasks = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const taskRef = firebase_config_1.default.collection('tasks').doc(taskId);
    yield taskRef.delete();
    let message = "Tarea eliminada correctamente";
    if (!taskRef.id) {
        message = "No se pudo eliminar la tarea";
    }
    return message;
});
exports.deleteTasks = deleteTasks;
