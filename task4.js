"use strict";
const friendsList = [
    { name: "amjad", age: 22 },
    { name: "adnan", age: 25 },
    { name: "ahmed", age: 21 },
    { name: "osama", age: 26 },
    { name: "kashif", age: 28 },
    { name: "adeel", age: 46 },
    { name: "fahad", age: 32 },
    { name: "salman", age: 33 },
    { name: "wahaj", age: 24 },
    { name: "waqas", age: 23 },
];
console.log('Friends list: ', friendsList);
for (let i = friendsList.length - 1; i >= 0; i--) {
    if (friendsList[i].name === "adeel") {
        console.log("hello " + friendsList[i].name + " - he is my enemy");
    }
    else {
        console.log("hello " + friendsList[i].name);
    }
}
