const fullName = require(`./name.js`);
const hobbies = require(`./hobbies.js`);

const people = () => {
  return (
    fullName("Carlo", "Elvisi") +
    " " +
    hobbies("palestra", "videogiochi", "film")
  );
};

module.exports = people;
