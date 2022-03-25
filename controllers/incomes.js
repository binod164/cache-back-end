import { Income } from '../models/income.js'

function index (req, res) {
  Income.find({})
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

function show(req, res) {
  Income.findById(req.params.id)
  .then(income => res.json(income))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  show
}