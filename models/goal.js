import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({
  name: {
    type: String
  },
  currentAmount: {
    type: Number
  },
  amount: {
    type: Number
  },
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
}, {
  timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
  Goal
}