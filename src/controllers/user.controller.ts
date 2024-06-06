import { Request, Response } from 'express';
import { getUser, addUser } from '../services/user.service';
import { User } from '../models/user';

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const userResponse = await getUser(email);
    res.status(200).json({userExists : userResponse});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};


//Agregar tarea
export const addUsersController = async (req: Request, res: Response) => {
  try {    
    const newUser: User = {
      email: req.body.email,
    };

    const userResponse = await addUser(newUser);
    res.status(200).json({message: userResponse});
  } catch (error) {    
    res.status(500).send("Ocurrió un error");
  }
};