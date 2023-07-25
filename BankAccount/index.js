class BankAccout {
  constructor(balance) {
    if (balance < 0) this.balance = 0.0;
    else this.balance = balance;
  }

  /**
   * Checks the balance.
   * @returns {Number} The balance.
   */
  getBalance() {
    return parseFloat(this.balance);
  }

  /**
   * Do a depositing
   * @param {Number} value
   */
  depositing(value) {
    if (value > 0.0) this.balance += value;
  }

  /**
   * Do a withDrawing
   * @param {Number} value
   */
  withDrawing(value) {
    if (value > 0.0) this.balance -= value;
  }
}

const test = new BankAccout(15000.0);
test.depositing(35.5);
test.withDrawing(65.5);

console.log("test", test.getBalance());

class SavingAccount extends BankAccout {
  constructor(balance) {
    super(balance);
    this.type = "Saving Account";
  }

  getType() {
    return this.type;
  }

  /*  getBalance() {
    return super.getBalance();
  }

  depositing(value) {
    super.depositing(value);
  }

  withDrawing(value) {
    super.withDrawing(value);
  } */
}

class CheckingAccount extends BankAccout {
  constructor(balance) {
    super(balance);
    this.type = "Checking Account";
  }

  getType() {
    return this.type;
  }

  /*  getBalance() {
    return super.getBalance();
  }

  depositing(value) {
    super.depositing(value);
  }

  withDrawing(value) {
    super.withDrawing(value);
  } */
}

let l = new CheckingAccount(15222.0);
let k = new SavingAccount(123321.0);
console.log("l", l.getType());
console.log("l", l.getBalance());
console.log("k", k.getType());
