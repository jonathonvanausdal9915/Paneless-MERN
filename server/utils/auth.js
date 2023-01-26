const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ name, email, _id }) {
    const payload = { name, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
