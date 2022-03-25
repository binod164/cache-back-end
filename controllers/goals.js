import { Goal } from '../models/goal.js'

function index (req, res) {
  Goal.find({})
  .populate('owner')
  .then(goals => {
    res.json(goals)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Goal.create(req.body)
  .then(goal => {
    goal.populate('owner')
    .then(populatedGoal => {
      res.json(populatedGoal)
    })
  })
  .catch(err => res.json(err))
}

function show(req, res) {
  Goal.findById(req.params.id)
  .then(goal => res.json(goal))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  show
}

