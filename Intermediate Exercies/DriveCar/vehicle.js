class Vehicle {
  constructor(fuel_quantity, fuel_consumption) {
    this.fuel_quantity = fuel_quantity;
    this.fuel_consumption = fuel_consumption;
    this.fuelLeft = fuel_quantity;
  }
  drive(distance) {
    const fuelDrived =
      distance * (this.fuel_consumption + this.increasedConsumption());
    if (fuelDrived > this.fuel_quantity) {
      console.log("Car cannot drive this distance");
    } else {
      this.fuelLeft -= fuelDrived;
    }

    console.log(this.fuelLeft);
  }

  refuel(fuel) {
    if (this.fuelLeft + this.fuelType(fuel) <= this.fuel_quantity) {
      this.fuelLeft += this.fuelType(fuel);
      console.log(this.fuelLeft);
    } else {
      console.log("Car cannot handle this fuel");
    }
  }

  increasedConsumption() {
    return 0;
  }

  fuelType(fuel) {
    return fuel;
  }
}

class Car extends Vehicle {
  constructor(fuel_quantity, fuel_consumption) {
    super(fuel_quantity, fuel_consumption);
  }

  increasedConsumption() {
    return 0.9;
  }
}

class Truck extends Vehicle {
  constructor(fuel_quantity, fuel_consumption) {
    super(fuel_quantity, fuel_consumption);
  }

  increasedConsumption() {
    return 1.6;
  }

  fuelType(fuel) {
    return 0.95 * fuel;
  }
}

const car = new Car(20, 5);
car.drive(3);
car.refuel(10);

const truck = new Truck(100, 15);
truck.drive(5);
truck.refuel(50);
