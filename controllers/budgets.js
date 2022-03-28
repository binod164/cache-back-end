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
  req.body.owner = req.user.profile
  Budget.create(req.body)
  .then(budget => {
    budget.populate('owner')
    .then(populatedBudget => {
      res.json(populatedBudget)
    })
  })
  .catch(err => res.json(err))
}

function deleteBudget(req, res) {
  Budget.findByIdAndDelete(req.params.id)
  .then(budget => res.json(budget))
  .catch(err => res.json(err))
}

function update(req, res) {
  Budget.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .populate('owner')
  .then(budget => res.json(budget))
  .catch(err => res.json(err))
}

export {
  create,
  index,
  deleteBudget as delete,
  update
}
