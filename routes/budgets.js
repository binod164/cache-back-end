import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.post('/', budgetsCtrl.create)

/*---------- Protected Routes ----------*/

router.use(decodeUserFromToken)

// router.get('/', checkAuth, budgetsCtrl.index)


export{
  router
}