import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const plansSchema = new Schema({
  name: { type: String, required: true },
  provider: { type: String, required: true },
  price: { type: Number, required: true },
  details: { type: String },
});

plansSchema.virtual('formatPrice').get(() => {
  return new Intl.NumberFormat('id-ID').format(this.price);
});

export default mongoose.model('Plans', plansSchema);
