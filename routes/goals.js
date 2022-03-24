import { Router } from 'express'
import * as goalsCtrl from  '../controllers/goals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, goalsCtrl.index)

export {
  router
}