import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  email: {
    type: String, 
    required: true, 
    lowercase: true, 
    unique: true
  },
  name: {
    type: String,
  },
  income: [incomeSchema],
  expense: [expenseSchema],
  budget: [budgetSchema],
  goal: [goalSchema]
}, {
  timestamps: true
})

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

const expenseSchema = new Schema({
  category: {
    type: String,
    enum: ['Health','Housing','Grocery','Bills','Travel','Other'],
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

const goalSchema = new Schema({
  name: {
    type: String
  },
  amount: {
    type: Number
  }
}, {
  timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
