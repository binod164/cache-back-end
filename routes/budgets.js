import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/',checkAuth, budgetsCtrl.create)
router.get('/',checkAuth, budgetsCtrl.index)
router.put('/:id',checkAuth, budgetsCtrl.update)
router.delete('/:id',checkAuth, budgetsCtrl.delete)

export{
  router
}