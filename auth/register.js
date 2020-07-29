import User from '../mongoModels/User.js';
import bcrypt from 'bcrypt';

export default async function (req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let newUser = await new User({
      username: req.body.username,
      password: hashedPassword,
      isAdmin: req.body.key === process.env.ADMIN_KEY,
    }).save();

    res.json(newUser);
  } catch (error) {
    if (error) {
      return next(error);
    }
  }
}
