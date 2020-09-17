import { Router } from 'express';
import { getAll, getOne } from './user.controller';

const router = Router();

router.get('/', getOne);

router.get('/all', getAll);

export default router;
