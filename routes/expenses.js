import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, expensesCtrl.index)
router.get('/:id', checkAuth, expensesCtrl.show)
router.post('/', checkAuth, expensesCtrl.create)

export {
  router
}