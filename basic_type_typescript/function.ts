// Normal function
function sum (num1: number, num2:number): number{
    return num1+num2;
}

// arrow function

const arrowFun = (num1:number, num2:number): number => num1+num2;


const myBalance:{
    name: string,
    balance: number,
    getBalance(money:number):number
} ={
    name: "sahed",
    balance: 5,
    getBalance(money:number){
        this.balance = this.balance + money;
        return this.balance;
    }
}

console.log(myBalance.getBalance(4));
console.log(myBalance.getBalance(4));
console.log(myBalance.getBalance(4));
console.log(myBalance.balance);