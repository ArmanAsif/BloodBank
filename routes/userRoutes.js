import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUsersReview,
  addFeedback,
  acceptRequest,
  getAllUsers,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin, getAllUsers)
router.post('/login', authUser)
router.get('/reviews', protect, getUsersReview)
router.put('/:id/accept', protect, acceptRequest)
router.put('/:id/feedback', protect, addFeedback)


export default router


