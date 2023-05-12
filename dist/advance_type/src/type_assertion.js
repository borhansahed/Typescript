"use strict";
let emni;
emni = "Next level development";
emni.length; // one way of type assertion
emni.length; // second way of type assertion
// type assertion in function
function convertStringToNumber(num) {
    if (typeof (num) === 'string') {
        const value = parseInt(num);
        return value;
    }
    return num;
}
const newValue = convertStringToNumber('3');
console.log(typeof (newValue));
