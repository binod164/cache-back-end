import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = new Schema({
    totalLimit: {
      type: Number
    },
    category: {
      type: String,
      enum: ['Health','Housing','Grocery','Bills','Travel','Other']
    },
    categoryLimit: {
      type: Number
    },
  },{
    timestamps: true
  })

const Budget = mongoose.model('Budget', budgetSchema)

export {
  Budget
}  