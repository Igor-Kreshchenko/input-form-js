const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let counter = 0;
let transaction;

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const obj = {
      id: (counter += 1),
      type,
      amount,
    };

    return obj;
  },

  deposit(amount) {
    transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
    return `Вы положили на счёт: ${amount} кредитов`;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return 'Недостаточно средств на счету!';
    }

    transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
    return `Вы сняли со счёта: ${amount} кредитов`;
  },

  getBalance() {
    return `На вашем счету: ${this.balance} кредитов`;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    return 'Транзакция не найдена! Попробуйте ещё раз';
  },

  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log(account.transactions);
console.log(account.deposit(1000));
console.log(account.withdraw(100));
console.log(account.withdraw(200));
console.log(account.withdraw(300));
console.log(account.deposit(500));
console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
