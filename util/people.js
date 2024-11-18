const fullName = require(`./name.js`);
const hobbies = require(`./hobbies.js`);
/**
 * una funziona che aggiunge la funzione fullName() e la funzione hobbies()
 * @returns fullName + hobbies
 */ 
const people = () => {
  return (
    fullName("Carlo", "Elvisi") +
    " " +
    hobbies("palestra", "videogiochi", "film")
  );
};

module.exports = people;
