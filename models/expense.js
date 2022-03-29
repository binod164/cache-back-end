import mongoose from 'mongoose'

const Schema = mongoose.Schema

const expenseSchema = new Schema({
  category: {
    type: String,
    enum: ['Health','Housing','Grocery','Bills','Travel','Goal', 'Other'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: function(){
      let date = new Date()
      return date.setDate(date.getDate())
  }},
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
}, {
  timestamps: true
})

const Expense = mongoose.model('Expense', expenseSchema)

export {
  Expense
}  