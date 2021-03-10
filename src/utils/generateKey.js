/**
 * This module will generate a public and private keypair and save to current directory
 *
 * Make sure to save the private key elsewhere after generated!
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function genKeyPair() {
  // Generates an object where the keys are stored in properties `privateKey` and `publicKey`
  const keyPair = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096, // bits - standard for RSA keys
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  });

  // Create the public key file
  fs.writeFileSync(`${path.join(__dirname, '../../')}/id_rsa_pub.pem`, keyPair.publicKey);

  // Create the private key file
  fs.writeFileSync(`${path.join(__dirname, '../../')}/id_rsa_priv.pem`, keyPair.privateKey);
}

// Generate the keypair
genKeyPair();
