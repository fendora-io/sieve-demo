const crypto = require('crypto');

function cacheKey(data) {
  return crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
}

module.exports = { cacheKey };
