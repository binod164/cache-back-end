import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.post('/', budgetsCtrl.create)
router.get('/', budgetsCtrl.index)

/*---------- Protected Routes ----------*/

router.use(decodeUserFromToken)



export{
  router
}