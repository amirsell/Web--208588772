import Router from 'express-promise-router'
import usersRouter from './usersRouter.js';
import mealsRouter from './mealsRouter.js';
import ordersRouter from './ordersRouter.js';

const apiRouter = Router();
apiRouter.use('/users', usersRouter);
apiRouter.use('/meals', mealsRouter);
apiRouter.use('/orders', ordersRouter);

export default apiRouter;