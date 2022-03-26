import { Router } from 'express'
import * as goalsCtrl from  '../controllers/goals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/', goalsCtrl.index)
router.post('/', goalsCtrl.create)
router.delete('/:id', goalsCtrl.delete)
router.put('/:id', goalsCtrl.update)

/*---------- Protected Routes ----------*/

router.use(decodeUserFromToken)


export {
  router
}