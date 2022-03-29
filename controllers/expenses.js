import { Expense } from '../models/expense.js'

function index (req, res) {
  Expense.find({owner: req.user.profile})
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

function deleteExpense(req, res) {
  console.log(req.params.id)
  Expense.findByIdAndDelete(req.params.id)
  .then(expense => res.json(expense))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  deleteExpense as delete
}