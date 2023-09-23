// Create a class called PizzaDelivery. Upon initialization, it should receive a name (string), a price (float), and
// ingredients (dictionary). The class should also have an instance attribute ordered set to False by default. You
// should also create 3 additional instance methods:

// - add_extra(ingredient: str, quantity: int, price_per_quantity: float):
// o If we already have this ingredient in our pizza, increase the ingredient quantity with the given one
// and update the pizza price by adding the ingredient price for the given quantity
// o If we do not have this ingredient in our pizza, we should add it and update the pizza price

// - remove_ingredient(ingredient: str, quantity: int, price_per_quantity: float):
// o If we do not have this ingredient in our pizza, we should return the following message "Wrong
// ingredient selected! We do not use {ingredient} in {pizza_name}!"
// o If we have the ingredient, but we try to remove more than we have available, we should return the
// following message "Please check again the desired quantity of {ingredient}!"

// - make_order()
// o Set the attribute ordered to True and return the following message "You've ordered pizza
// {pizza_name} prepared with {ingredient: quantity} and the price will be
// {price}lv.". The ingredients should be separated by a comma and a space ", "
// o Keep in mind that once the pizza is ordered, no further changes are allowed. We should return the
// following message if the customer tries to change it: "Pizza {name} already prepared, and
// we can't make any changes!"

function WrongOrder(pizzaName) {
    console.log(
        "Pizza " +
          pizzaName +
          " already prepared, and we can't make any changes!"
      );
    
  } 

class PizzaDelivery {
  name;
  price;
  ingredients;
  ordered;

  constructor(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.ordered = false;
  }

  add_extra(ingredient, quantity, pricePerQuantity) {
    if (this.ordered === false) {
      if (this.ingredients.hasOwnProperty(ingredient)) {
        this.ingredients[ingredient] += 1;
        this.price += quantity * pricePerQuantity;
      } else {
        this.ingredients[ingredient] = quantity;
        this.price += quantity * pricePerQuantity;
      }
    } else {
        WrongOrder(this.name)
    }
  }

  remove_ingredient(ingredient, quantity, pricePerQuantity) {
    if (this.ordered === false) {
      if (this.ingredients.hasOwnProperty(ingredient)) {
        if (
          this.ingredients[ingredient] > 0 &&
          this.ingredients[ingredient] >= quantity
        ) {
          this.ingredients[ingredient] -= 1;
          this.price -= quantity * pricePerQuantity;
        } else {
          console.log(
            "Please check again the desired quantity of " + ingredient + "!"
          );
        }
      } else {
        console.log(
          "Wrong ingredient selected! We do not use " +
            ingredient +
            " in " +
            this.name +
            "!"
        );
      }
    } else {
        WrongOrder(this.name)
    }
  }

  make_order() {
    if (this.ordered === false) {
      console.log(
        "You've ordered pizza " +
          this.name +
          " prepared with " +
          Object.entries(this.ingredients)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ") +
          " and the price will be " +
          this.price +
          " lv."
      );
      this.ordered = true;
    } else {
        WrongOrder(this.name)
    }
  }
}

// Tests

margarita = new PizzaDelivery("Margarita", 11, { cheese: 2, tomatoes: 1 });
margarita.add_extra("mozzarella", 1, 0.5);
margarita.add_extra("cheese", 1, 1);
margarita.remove_ingredient("cheese", 1, 1);
margarita.remove_ingredient("bacon", 1, 2.5);
margarita.remove_ingredient("tomatoes", 2, 0.5);
margarita.remove_ingredient("cheese", 2, 1);
margarita.make_order();
margarita.add_extra("cheese", 1, 1);
