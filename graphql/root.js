import Plans from '../mongoModels/Plans.js';
import Transaction from '../mongoModels/Transaction.js';
import Customer from '../mongoModels/Customer.js';
import User from '../mongoModels/User.js';

export default {
  user: async ({ id }) => {
    const user = await User.findById(id).exec();

    return user;
  },
  plans: async () => {
    const plans = await Plans.find().exec();

    return plans;
  },

  transactions: async () => {
    const transactions = await Transaction.find()
      .populate('Plans')
      .populate('Customer')
      .exec();

    return transactions;
  },

  createPlan: async ({ input }) => {
    const newPlan = await new Plans({
      name: input.name,
      price: input.price,
      details: input.details,
      provider: input.provider,
    }).save();

    return newPlan;
  },

  updatePlan: async ({ id, input }) => {
    const updatedPlan = await Plans.findByIdAndUpdate(id, {
      name: input.name,
      price: input.price,
      details: input.details,
      provider: input.provider,
    }).exec();

    return updatedPlan;
  },

  deletePlan: async ({ id }) => {
    const deletedPlan = await Plans.findByIdAndDelete(id).exec();

    return deletedPlan;
  },

  createTransaction: async ({ input }) => {
    const selectedPlan = await Plans.findOne({ name: input.plan }).exec();

    const newCustomer = await new Customer({
      name: input.customerName,
      number: input.customerNumber,
    }).save();

    const newTransaction = await new Transaction({
      plan: selectedPlan.id,
      customer: newCustomer.id,
    }).save();

    return newTransaction;
  },

  deleteTransaction: async ({ id }) => {
    const deletedTransaction = await (
      await Transaction.findByIdAndDelete(id)
    ).execPopulate();

    return deletedTransaction;
  },
};
