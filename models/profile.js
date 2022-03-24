import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
},{
    timestamps: true,
})

let num = 1
const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
