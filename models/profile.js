import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
},{
    timestamps: true,
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
    default: function(){
      let date = new Date()
      return date.setDate(date.getDate())
  }}
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
