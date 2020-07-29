import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: String },
  number: { type: String },
});

export default mongoose.model('Customer', customerSchema);
