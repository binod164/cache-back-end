import { Router } from 'express'
import * as incomesCtrl from'../controllers/incomes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, incomesCtrl.index)
router.get('/:id', checkAuth, incomesCtrl.show)
router.post('/', checkAuth, incomesCtrl.create)

export {
  router
}