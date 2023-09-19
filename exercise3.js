// Create a class called Vet. The Vet class represents a veterinary doctor in an animal clinic.
// Upon initialization, it should receive a name (string - the name of the vet doctor).
// It should also have an instance attribute called
// animals (empty list by default). There should also be
// 2 class attributes: animals (empty list) which will store the
// total amount of animals for all vet doctors; and space (5 by default, representing the total
// capacity of the clinic).
// You should create 3 additional instance methods:
// - register_animal(animal_name)
// o If there is available space in the vet clinic, add the animal to both animals' lists and return a
// message: "{name} registered in the clinic"
// o Otherwise, return "Not enough space"
// - unregister_animal(animal_name)
// o If the animal is in the clinic, remove it from both animals' lists and return "{animal}
// unregistered successfully"
// o Otherwise, return "{animal} not in the clinic"
// - info()
// o Return info about the vet doctor, the number of animals in his/her list, and the available space left
// in the clinic:
// "{vet_name} has {number_animals} animals. {space_left_in_clinic} space
// left in clinic"

class Vet {
  name;
  animals;
  space;

  constructor(name) {
    this.name = name;
    this.animals = [];
    this.space = 5;
  }

  registerAnimal(animal_name) {
    if (this.space > 0) {
      console.log(animal_name + " registered in the clinic");
      this.animals.push(animal_name);
      this.space--;
    } else {
      console.log(" No free spaces");
    }
  }

  unregisterAnimal(animal_name) {
    if (this.animals.includes(animal_name)) {
      console.log(animal_name + " unregistered successfully");
      this.animals.pop(animal_name);
    } else {
      console.log(animal_name + " not in clinic");
    }
  }

  info() {
    console.log(
      this.name +
        " has " +
        this.animals.length +
        " animals. " +
        this.space +
        " space left in clinic"
    );
  }
}

// Tests

peter = new Vet("Peter");
george = new Vet("George");
peter.registerAnimal("Tom");
george.registerAnimal("Corry");
george.registerAnimal("Kay");
george.unregisterAnimal("Corry");
peter.registerAnimal("Fishy");
peter.registerAnimal("Bobby");
peter.registerAnimal("Silky");
peter.unregisterAnimal("Molly");
peter.unregisterAnimal("Tom");
peter.info();
george.info()
