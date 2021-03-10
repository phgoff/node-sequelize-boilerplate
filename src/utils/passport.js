import fs from 'fs';
import path from 'path';
import passport from 'passport';
import passportJWT from 'passport-jwt';

const pathToKey = path.join(__dirname, '../../', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: PUB_KEY,
      algorithms: ['RS256'],
    },
    async (jwtPayload, done) => {
      try {
        // configs
        const user = true;
        if (!user) {
          return done(null, false);
        }
        return done(null, true);
      } catch (err) {
        return done(err);
      }
    },
  ),
);
