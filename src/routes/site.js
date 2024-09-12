import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
const router = express.Router();

const siteController = SiteController;

router.use('/search',siteController.search);
router.use('/',siteController.index);


export default router;