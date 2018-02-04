const crypto = require('crypto');

function md5(string) {
  /*return crypto
    .createHash('md5')
    .update(string)
    .digest('hex');*/
  return string;
}

module.exports = md5;
