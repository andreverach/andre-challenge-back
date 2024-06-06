import { Router } from 'express';
import { getUsersController, addUsersController,  } from '../controllers/user.controller';

const router = Router();

router.get('/:email', getUsersController);
router.post('/', addUsersController);

export default router;
