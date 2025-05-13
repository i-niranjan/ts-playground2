export {};

// const duties: string[] = ["write code"];
const duties: Array<String> = ["write code"]; //- Declared In generics

duties.push("fix bugs");
duties.map((duty) => {
  console.log(duty.toUpperCase());
});

// tuples

let employeeLockerCode: [string, number] = ["John", 345];
employeeLockerCode = ["5", 6];
employeeLockerCode.push(12);
console.log(employeeLockerCode);
