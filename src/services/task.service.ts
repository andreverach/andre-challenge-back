import { Task } from '../models/task';
import dbFirebase from '../config/firebase.config';

const tasksCollection = dbFirebase.collection('tasks');

export const getTasks = async (): Promise<Task[]> => {
  const snapshot = await tasksCollection.get();
  const tasks: Task[] = [];
  snapshot.forEach(doc => {
    const task = doc.data() as Task;
    task.id = doc.id;
    tasks.push(task);
  });
  return tasks;
};

export const addTasks = async (newTask: Task): Promise<string> => {
  const taskRef = await dbFirebase.collection('tasks').add(newTask);
  let message = "Tarea agregada correctamente";
  if(!taskRef.id) {
    message = "No se pudo agregar la tarea";
  }
  return message;
};

export const updateTasks = async (taskId: string, newTask: Task): Promise<string> => {  
  const taskRef = dbFirebase.collection('tasks').doc(taskId);
  await taskRef.update({
    title: newTask.title,
    description: newTask.description,    
    status: newTask.status
  });

  let message = "Tarea actualizada correctamente";
  if(!taskRef.id) {
    message = "No se pudo actualizar la tarea";
  }
  return message;
};


export const deleteTasks = async (taskId: string): Promise<string> => {  
  const taskRef = dbFirebase.collection('tasks').doc(taskId);
  await taskRef.delete();
  let message = "Tarea eliminada correctamente";
  if(!taskRef.id) {
    message = "No se pudo eliminar la tarea";
  }
  return message;
};