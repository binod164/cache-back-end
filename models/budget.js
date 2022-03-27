import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = new Schema({
    totalLimit: {
      type: Number
    },
    healthLimit: {
      type: Number
    },
    housingLimit: {
      type: Number
    },
    groceryLimit: {
      type: Number
    },
    billsLimit: {
      type: Number
    },
    travelLimit: {
      type: Number
    },
    owner: {
      type: Schema.Types.ObjectId, ref: "Profile"
    },
  },{
    timestamps: true
  })

const Budget = mongoose.model('Budget', budgetSchema)

export {
  Budget
}  