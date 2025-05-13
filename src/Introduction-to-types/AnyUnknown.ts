export {};
let queryResult: any = 5; //disables the ts completely
queryResult = "5";
queryResult = [5];

function getSalary(employeeId: number): unknown {
  return JSON.parse("6");
}

let salary = getSalary(123);

// When we use unknown operator we have to do the type narrowing

if (
  salary &&
  typeof salary === "object" &&
  "history" in salary &&
  Array.isArray(salary.history)
) {
  salary.history.push(12000);
}

console.log(salary);
