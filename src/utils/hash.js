const crypto = require('crypto');

function fileChecksum(buffer) {
  return crypto.createHash('sha1').update(buffer).digest('hex');
}

function verifyIntegrity(buffer, expectedHash) {
  return fileChecksum(buffer) === expectedHash;
}

module.exports = { fileChecksum, verifyIntegrity };
