import mongoose from 'mongoose'

const Schema = mongoose.Schema


const incomeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 0,
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
  },
{
  timestamps: true
})

const Income = mongoose.model('Income', incomeSchema)

export {
  Income
}  