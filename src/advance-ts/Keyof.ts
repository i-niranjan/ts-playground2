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

function getProperty2<T>(arg: T, key: keyof T) {
  console.log(arg[key]);
}

const var2 = getProperty2(name, "position");
