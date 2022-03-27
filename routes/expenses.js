import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, expensesCtrl.create)
router.get('/', checkAuth, expensesCtrl.index)
router.delete('/:id', checkAuth, expensesCtrl.delete)


export {
  router
}