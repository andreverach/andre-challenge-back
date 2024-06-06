import dbFirebase from '../config/firebase.config';
import { User } from '../models/user';

const usersCollection = dbFirebase.collection('users');

export const getUser = async (email: string): Promise<boolean> => {    
  const userSnapshot = await dbFirebase.collection('users').where('email', '==', email).get();
  let userExists = false;
  if (!userSnapshot.empty) {
    userExists = true;
  }
 
  return userExists;
};

export const addUser = async (newUser: User): Promise<string> => {
  const taskRef = await dbFirebase.collection('users').add(newUser);
  let message = "Usuario agregado correctamente";
  if(!taskRef.id) {
    message = "No se pudo agregar el usuario";
  }
  return message;
};