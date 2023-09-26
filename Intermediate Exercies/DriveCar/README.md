Create an abstract class called Vehicle that should have abstract methods drive and refuel. Create 2 vehicles
that inherit the Vehicle class (a Car and a Truck) and simulate driving and refueling them. Car and Truck both
receive fuel_quantity and fuel_consumption in liters per km upon initialization. They both can be driven a
given distance: drive(distance) and refueled with a given amount of fuel: refuel(fuel). It is summer, so
both vehicles use air conditioners, and their fuel consumption per km when driving is increased by 0.9 liters for the car and 1.6 liters for the truck. Also, the Truck has a tiny hole in its tank, and when it is refueled, it keeps only 95%
of the given fuel. The car has no problems and adds all the given fuel to its tank. If a vehicle cannot travel the given
distance, its fuel does not change.
