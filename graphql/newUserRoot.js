import User from '../mongoModels/User.js';
import bcrypt from 'bcrypt';

export default {
  user: async ({ id }) => {
    const user = await User.findById(id).exec();

    return user;
  },
  register: async ({ input }) => {
    const hashedPassword = await bcrypt.hash(input.password, 10);

    let newUser = await new User({
      username: input.username,
      password: hashedPassword,
    }).save();

    return newUser;
  },
};
