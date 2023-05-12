"use strict";
const crush = {
    name: "Katrina Kaif",
    age: 40,
    profession: "Actress",
    country: "United States"
};
const crush2 = {
    name: "Ileana D'cruz",
    age: 37,
    profession: "Actress",
};
const brotherName = "MOhammad Borhan Uddin";
const calculate = (num, num2, operation) => {
    return operation(num, num2);
};
console.log(calculate(19, 14, (x, y) => x - y));
