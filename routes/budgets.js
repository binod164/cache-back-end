import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/

router.use(decodeUserFromToken)
router.post('/', budgetsCtrl.create)
router.get('/', budgetsCtrl.index)
router.put('/:id', budgetsCtrl.update)
router.delete('/:id', budgetsCtrl.delete)



export{
  router
}