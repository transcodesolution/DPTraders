import express from 'express'
import { dailyData } from '../Controller/report.js';

const router = express.Router();

router.get('/daily', dailyData)


export default router;