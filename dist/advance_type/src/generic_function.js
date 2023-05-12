"use strict";
// arrow function
const createArray = (temp) => {
    return [temp];
};
// console.log(createArray("hello"))
// in generic
// const createArray1 = <T>(temp: T):T[] =>{
//     return [temp]
// }
// const result = createArray1<number>(3);
// console.log(result);
// normal function
function createArray3(temp) {
    return [temp];
}
// Generic Tuple in function
const createArray1 = (temp, temp2) => {
    return [temp, temp2];
};
const result = createArray1(3, "sahed");
// console.log(result);s
