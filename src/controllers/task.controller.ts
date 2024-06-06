import { Request, Response } from 'express';
import { format } from 'date-fns';
import { getTasks, addTasks, updateTasks, deleteTasks } from '../services/task.service';
import { Task } from '../models/task';

//Listar tareas
export const getTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener el listado de tareas' });
  }
};

//Agregar tarea
export const addTasksController = async (req: Request, res: Response) => {
  try {
    //formateando fecha
    const currentDateTime = new Date();
    const formattedDate = format(currentDateTime, 'dd/MM/yyyy HH:mm:ss');

    const newTask: Task = {
      title: req.body.title,
      description: req.body.description,
      createdAt: formattedDate,
      status: req.body.status || false,//por defecto false si no se envia lo contrario
    };

    const taskResponse = await addTasks(newTask);
    res.status(200).json({message: taskResponse});
  } catch (error) {    
    res.status(500).send("Ocurrió un error");
  }
};


//Actualizar tarea
export const udpdateTasksController = async (req: Request, res: Response) => {
  try {        
    const taskId = req.params.id;
    const newTask: Task = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
    };

    const taskResponse = await updateTasks(taskId, newTask);
    res.status(200).json({message: taskResponse});
  } catch (error) {    
    res.status(500).send("Ocurrió un error");
  }
};


//eliminar tarea
export const deleteTasksController = async (req: Request, res: Response) => {
  try {        
    const taskId = req.params.id;    

    const taskResponse = await deleteTasks(taskId);
    res.status(200).json({message: taskResponse});
  } catch (error) {    
    res.status(500).send("Ocurrió un error");
  }
};