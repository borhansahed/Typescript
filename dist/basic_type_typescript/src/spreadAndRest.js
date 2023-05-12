"use strict";
// spread operator
// Spread operator takes element from a array and push into our old array
const myFriend = ["sahed", "illena", "Katrina"];
const myNewFriend = ["Tappsee", "Emma"];
const [x, y, z] = myFriend;
console.log(y);
myFriend.push(...myNewFriend);
console.log(myFriend);
// Rest parameters
// Rest parameters convert all parameters into a array
const greetFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends("Illena", "Katrina", "Taapsee");
const obj = {
    myName: "sahed",
    myRoll: 45
};
const { myName: kat, myRoll } = obj;
console.log(kat);
