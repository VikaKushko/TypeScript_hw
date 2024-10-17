'use strict';


function BankAccount() {
    let balance = 0;

    this.deposit = function (amount){
        if (amount > 0) {
            balance += parseFloat(amount);
            console.log(`Поповнено: ${amount}. Новий баланс: ${balance}`);
        } else {
            console.log('Сума для поповнення повинна бути більшою за 0.');
        }
    }

    this.withdraw = function (amount){
        if (amount <= balance) {
            balance -= parseFloat(amount);
        } else if(amount > balance) {
            console.log('Недостатньо коштів на рахунку');
        } else {
            console.log('Сума для зняття повинна бути більшою за 0');
        }
    }


    this.getBalance = function () {
        return balance;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.withdraw(30);
console.log(myAccount.getBalance());
myAccount.withdraw(100);
myAccount.deposit(-50);