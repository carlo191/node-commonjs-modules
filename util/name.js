/**
 * una funzione che restituisce un nome completo
 * @param {string} firstName
 * @param {string} lastName
 * @returns param1 + param2
 */
const fullName = (firstName, lastName) => {
  const full = firstName + " " + lastName;
  return full;
};

module.exports = fullName;
