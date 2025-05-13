"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
function generateRandonId() {
    return (0, crypto_1.randomBytes)(10).toString("hex");
}
var createEmployee = function (employeeName, salary) {
    return {
        name: employeeName,
        id: generateRandonId(),
        email: "".concat(employeeName, "@gmail.com"),
        salary: salary,
    };
};
var peter = createEmployee("Peter", 10000);
var Dan = createEmployee("Dan", 10000);
var allNewEmp = [peter, Dan];
// console.log(allNewEmp);
var sendWelcomeMessage = function (employee) {
    console.log("To ".concat(employee.email, "\n        Hello ").concat(employee.name, " Welcome ,\n        Your salary will be ").concat(employee.salary, "\n        "));
};
allNewEmp.forEach(function (employee) { return sendWelcomeMessage(employee); });
