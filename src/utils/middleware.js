import passport from 'passport';
import handleResponse from './handleResponse';
import './passport';

export default function isAuthenticated(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) return handleResponse(res, 500, 'Fail', 'Something went wrong!', null);
    if (!user) return handleResponse(res, 401, 'Fail', 'Unauthorized', null);
    req.user = user;
    next();
  })(req, res, next);
}
