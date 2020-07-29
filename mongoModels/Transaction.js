import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  plan: { type: Schema.Types.ObjectId, ref: 'Plans' },
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  time: { type: Date, default: moment() },
});

transactionSchema.virtual('formatDate').get(() => {
  return moment(this.time).format('DD-MM-YYYY, h:mm:ss a');
});

export default mongoose.model('Transaction', transactionSchema);
