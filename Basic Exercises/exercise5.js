// Create a class called Account. Upon initialization, it should receive :
//  id (number), a name (string), and a balance (integer; optional; 0 by default).
// The class should also have 3 additional instance methods:
// - credit(amount) - adds the amount to the balance and returns the new balance
// - debit(amount) - if the amount is less than or equal to the balance, reduces the balance by the amount
// and returns the new balance. Otherwise, return "Amount exceeded balance"
// - info() - returns "User {name} with account {id} has {balance} balance"

class Account {
  id;
  name;
  balance;

  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    if (balance) {
      this.balance = balance;
    } else {
      this.balance = 0;
    }
  }

  credit(amount) {
    this.balance = this.balance + amount;

    return this.balance;
  }

  debit(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;

      return this.balance;
    } else {
        return 'Amount exceeded balance'
    }
  }

  info() {
    console.log(
      "User " +
        this.name +
        " with account " +
        this.id +
        " has " +
        this.balance +
        " balance."
    );
  }
}

// Tests 

account = new Account(5411256, "Peter");
account.debit(500);
account.credit(1000);
account.debit(500);
account.info();
