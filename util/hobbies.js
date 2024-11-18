/**
 *  una funziona che crea un array di hobbies 
 * @param  {...string} hobbiesList 
 * @returns array di hobbies
 */
const hobbies = (...hobbiesList) => {
  const hobbiesArray = [];
  hobbiesArray.push(...hobbiesList);
  return hobbiesArray;
};

module.exports = hobbies;
