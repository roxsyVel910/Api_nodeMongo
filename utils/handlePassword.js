const bcryptjs = require('bcryptjs');

const encrypt = async (passwordPlain, salt) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};
/**
 * Compares a plain text password with a hashed password using bcryptjs.
 *
 * @param {string} passwordPlain - The plain text password to compare.
 * @param {string} hashPassword - The hashed password to compare against.
 * @return {Promise<boolean>} A boolean indicating whether the passwords match.
 */

const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };