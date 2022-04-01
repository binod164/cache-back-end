import { Router } from 'express'
import * as goalsCtrl from  '../controllers/goals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, goalsCtrl.index)
router.post('/', checkAuth, goalsCtrl.create)
router.delete('/:id', checkAuth, goalsCtrl.delete)
router.put('/:id', checkAuth, goalsCtrl.update)

export {
  router
}