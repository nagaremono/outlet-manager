import passport from 'passport';
import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        message: info.message,
      });
    }
    req.logIn(user, { session: false }, function (err) {
      if (err) return next(err);

      const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: '15m',
      });

      res.json({ user: token });
    });
  })(req, res, next);
}
