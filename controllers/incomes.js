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
  Income.create(req.body)
  .then(income => res.json(income))
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