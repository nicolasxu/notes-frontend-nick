// Also, since the inner function has access to the scope of the outer function,
// the variables and functions defined in the outer function will
// live longer than the duration of the outer function execution
//
//  The inner function may survive beyond the life of the outer function


const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
