import express from 'express';
import { postCreateShort, getRedirectToUrl } from './url.controler';

const router = express.Router();

router.route('/').post(postCreateShort);
router.route('/:short').get(getRedirectToUrl);

export default router;
