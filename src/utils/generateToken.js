import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

const pathToKey = path.join(__dirname, '../../', 'id_rsa_priv.pem');

const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

export default function createToken(id) {
  const expiresIn = '1d';
  const signedToken = jwt.sign(
    {
      iss: 'example',
      sub: id,
      iat: Math.floor(Date.now() / 1000),
    },
    PRIV_KEY,
    {
      expiresIn,
      algorithm: 'RS256',
    },
  );
  return {
    token: `Bearer ${signedToken}`,
    expiresIn,
  };
}
