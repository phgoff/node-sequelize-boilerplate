import { Router } from 'express';
import { getAll, getError, getErrorTryCatch } from './user.controller';

const router = Router();

router.get('/', getAll);

router.get('/error', getError);

router.get('/error-trycatch', getErrorTryCatch);

export default router;
