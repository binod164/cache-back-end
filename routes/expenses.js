import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/', expensesCtrl.create)
router.get('/', expensesCtrl.index)
router.delete('/:id', expensesCtrl.delete)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export {
  router
}