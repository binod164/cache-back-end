import { Router } from 'express'
import * as incomesCtrl from'../controllers/incomes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/', incomesCtrl.create)
router.get('/', incomesCtrl.index)
router.delete('/:id', incomesCtrl.delete)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)




export {
  router
}