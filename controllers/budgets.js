import { Budget } from '../models/budget.js'

function create(req, res) {
  console.log(req.body)
  Budget.create(req.body)
  .then(income => res.json(budget))
  .catch(err => res.json(err))
}

export {
  create
}
