import { Router } from 'express';
import { getTasksController, addTasksController, udpdateTasksController, deleteTasksController } from '../controllers/task.controller';

const router = Router();

//archivo de rutas para tareas
router.get('/', getTasksController);
router.post('/', addTasksController);
router.put('/:id', udpdateTasksController);
router.delete('/:id', deleteTasksController);

export default router;
