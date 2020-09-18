import { Router } from 'express';
import { getAll, getOne } from './user.controller';

const router = Router();

router.get('/all', getAll);

router.get('/:id', getOne);

export default router;
