import mongoose from 'mongoose'

const Schema = mongoose.Schema


const incomeSchema = new Schema({
  name: {
    type: String,
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
  }}
}, {
  timestamps: true
})

const Income = mongoose.model('Income', incomeSchema)

export {
  Income
}  