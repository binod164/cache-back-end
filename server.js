import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
import { router as budgetsRouter} from './routes/budgets.js'
import { router as expensesRouter } from './routes/expenses.js'
import { router as goalsRouter } from './routes/goals.js'
import { router as incomesRouter } from './routes/incomes.js'

import('./config/database.js')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
app.use('/api/budgets', budgetsRouter)
app.use('/api/expenses', expensesRouter)
app.use('/api/goals', goalsRouter)
app.use('/api/incomes', incomesRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
