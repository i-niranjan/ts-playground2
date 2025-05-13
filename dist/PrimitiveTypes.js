"use strict";
let firstName = "John";
let isAdmin = false;
let age = 30;
let duties = ["write code", "fix bugs"];
let car = null;
let bicycle = undefined;
let work = () => {
    console.log("working");
};
let salary = 50n;
let logo = Symbol("emerland");
let all = [firstName, isAdmin, age, car, bicycle, duties, work, salary, logo];
for (let item of all) {
    console.log(String(item) + "is" + typeof item);
}
