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
  let incomeDate = new Date(req.body.date)
  req.body.date = new Date( incomeDate.getTime() + Math.abs(incomeDate.getTimezoneOffset()*60000))
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