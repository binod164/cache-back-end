import { Income } from '../models/income.js'

function index (req, res) {
  Income.find({owner: req.user.profile})
  .populate('owner')
  .then(incomes => {
    res.json(incomes)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Income.create(req.body)
  .then(income => {
    income.populate('owner')
    .then(populatedIncome => {
      res.json(populatedIncome)
    })
  })
  .catch(err => res.json(err))
}

function deleteIncome(req, res) {
  console.log(req.params.id)
  Income.findByIdAndDelete(req.params.id)
  .then(income => res.json(income))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  deleteIncome as delete,
}