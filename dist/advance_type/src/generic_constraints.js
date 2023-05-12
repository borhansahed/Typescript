"use strict";
// constraints Generic
const addToMyCrushMind = (myInfo) => {
    const crushName = "ileana D'cruz";
    const newValue = Object.assign(Object.assign({}, myInfo), { crushName });
    return newValue;
};
const myInfo = {
    name: "sahed",
    age: 21,
    salary: 0
};
const result2 = addToMyCrushMind(myInfo);
const a = 'age';
const b = 'name';
function getProperty(obj, key) {
    return obj[key];
}
const result3 = getProperty({ name: "sahed", age: 21 }, "age");
console.log(result3);
