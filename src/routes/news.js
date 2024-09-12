import express from 'express';
import NewsController from '../app/controllers/NewsController.js';
const router = express.Router();

const newsController = NewsController; 

router.use('/:slug',newsController.show);
router.use('/',newsController.index);


export default router;