"use strict";
const myLevel = {
    name: "Sahed",
    expert: "javascript"
};
const level = {
    name: "Sahed",
    expert: "javascript",
    level: "junior",
    experience: 1
};
// enum
var Day;
(function (Day) {
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
    Day[Day["Sunday"] = 7] = "Sunday";
})(Day || (Day = {}));
let today = Day.Monday;
console.log(`Today is ${Day[today]}`);
