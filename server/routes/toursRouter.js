import express from 'express';

import { checkID, checkBody } from '../middlewares/index.js';
import {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} from '../controllers/toursControllers.js';

const router = express.Router();

// MIDDLEWARE for parameters
router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBody, createTour);

router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

export { router as toursRouter };
