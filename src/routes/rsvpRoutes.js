import { Router } from 'express';
import {  submitRSVP } from '../controllers/rsvp.js';

const router = Router();

/**
 * @route   POST /api/rsvp/start
 * @desc    Step 1: Validate name/email and set cookie
 */
// router.post('/start', startRSVP);

/**
 * @route   POST /api/rsvp/submit
 * @desc    Step 2: Save full details (Protected by JWT Cookie)
 */
router.post('/submit', submitRSVP);

export default router;