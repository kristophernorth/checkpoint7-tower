import { Schema } from "mongoose";
import { TicketSchema } from "./Ticket";


export const TowerEventSchema = new Schema(
  {
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    name: { type: String, minLength: 2, maxLength: 50, required: true },
    description: { type: String, minLength: 15, maxLength: 1000, require: true },
    coverImg: { type: String, require: true },
    location: { type: String, minLength: 1, maxLength: 500, required: true },
    capacity: { type: Number, min: 1, max: 5000, require: true },
    startDate: { type: Date, required: true },
    isCanceled: { type: Boolean, required: true, default: false },
    type: { type: String, enum: ['concert', 'convention', 'sport', 'digital'], required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

TowerEventSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

TicketSchema.virtual('ticketCount', {
  localField: '_id',
  ref: 'Ticket',
  foreignField: 'towerEventId',
  count: true
})