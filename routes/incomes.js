import { Router } from 'express'
import * as incomesCtrl from'../controllers/incomes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/', incomesCtrl.create)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, incomesCtrl.index)
router.get('/:id', checkAuth, incomesCtrl.show)


export {
  router
}