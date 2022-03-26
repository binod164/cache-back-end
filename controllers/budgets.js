import { Budget } from '../models/budget.js'

function index(req, res) {
  Budget.find({})
  .populate('owner')
  .then(budgets => {
    res.json(budgets)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  Budget.create(req.body)
  .then(budget => res.json(budget))
  .catch(err => res.json(err))
}

function deleteBudget(req, res) {
  Budget.findByIdAndDelete(req.params.id)
  .then(budget => res.json(budget))
  .catch(err => res.json(err))
}

export {
  create,
  index,
  deleteBudget as delete
}
