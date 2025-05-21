export {};
type Employee = {
  name: string;
  salary: number;
};

function hasBigSalary(empl: Employee) {
  return empl.salary > 50000;
}

const john: Employee = {
  name: "John",
  salary: 60000,
};

const bonus = hasBigSalary(john) ? 2000 : 3000;

type Intern = {
  name: string;
  tasks: string[];
};

type SalaryOf<T> = T extends { salary: number } ? T["salary"] : never;

let someSalary: SalaryOf<Employee>;
let noSalary: SalaryOf<Intern>;

type ArrayOfSalaries<T> = T extends Employee
  ? Array<T["salary"]>
  : T extends number
  ? T[]
  : never;

let emp1: ArrayOfSalaries<Employee>;
let emp2: ArrayOfSalaries<number>;

//Distirbutive Condtional TYPES - PENDING
