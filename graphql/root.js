import Plans from '../mongoModels/Plans.js';

export default {
  plans: async () => {
    const plans = await Plans.find().exec();

    return plans;
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
};
