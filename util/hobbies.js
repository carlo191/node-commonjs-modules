const hobbies = (...hobbiesList) => {
  const hobbiesArray = [];
  hobbiesArray.push(...hobbiesList);
  return hobbiesArray;
};

module.exports = hobbies;
