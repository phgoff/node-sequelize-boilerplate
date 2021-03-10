import { Router } from 'express';
import { getAll, login } from './user.controller';
import isAuthenticated from '@src/utils/middleware';

const router = Router();

router.get('/', getAll);

/* header; Authorization: token */
router.get('/with-token', isAuthenticated, getAll);

/* generate token */
router.post('/login', login);

export default router;
