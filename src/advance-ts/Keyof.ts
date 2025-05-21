export {};

type Position = "Programmer" | "Manager" | "HR" | "Scrum Master";

type Employee = {
  name: string;
  position: Position;
};

type EmployeeKeys = keyof Employee; //name | position

const name: Employee = {
  name: " John",
  position: "Programmer",
};

name["name"];

// console.log(name["position"]);

// function getProperty(arg: Employee, key: EmployeeKeys) {
//   console.log(arg[key]);
// }
// const var1 = getProperty(name, "name");

function getProperty2<T, K extends keyof T>(arg: T, key: K): T[K] {
  console.log(arg[key]);
  return arg[key];
}

const var2 = getProperty2(name, "position");

// console.log(var2);

function getObjectKeys<T extends object>(arg: T) {
  return Object.keys(arg);
}

function getObjectKeys2<T extends Array<string | number | object>>(
  arg: T
): Array<keyof T> {
  return Object.keys(arg) as Array<keyof T>;
}

const user = getObjectKeys2(["Hello", 2, name]);
console.log(user);
