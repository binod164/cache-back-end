import { Router } from 'express'
import * as incomesCtrl from'../controllers/incomes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, incomesCtrl.create)
router.get('/', checkAuth, incomesCtrl.index)
router.delete('/:id', checkAuth, incomesCtrl.delete)

export {
  router
}
