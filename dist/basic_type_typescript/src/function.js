"use strict";
// Normal function
function sum(num1, num2) {
    return num1 + num2;
}
// arrow function
const arrowFun = (num1, num2) => num1 + num2;
const myBalance = {
    name: "sahed",
    balance: 5,
    getBalance(money) {
        this.balance = this.balance + money;
        return this.balance;
    }
};
console.log(myBalance.getBalance(4));
console.log(myBalance.getBalance(4));
console.log(myBalance.getBalance(4));
console.log(myBalance.balance);
