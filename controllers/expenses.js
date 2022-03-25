import { Expense } from '../models/expense.js'

function index (req, res) {
  Expense.find({})
  .populate('owner')
  .then(expenses => {
    res.json(expenses)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Expense.create(req.body)
  .then(expense => {
    expense.populate('owner')
    .then(populatedExpense => {
      res.json(populatedExpense)
    })
  })
  .catch(err => res.json(err))
}

function show(req, res) {
  Expense.findById(req.params.id)
  .then(expense => res.json(expense))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  show
}