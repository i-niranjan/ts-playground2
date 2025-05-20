export {};
type Employee = {
  name: string;
  position: string;
  [key: string]: string; //This thing helps us to extend a object
};

const john: Employee = {
  name: "johnny",
  position: "programmer",
  email: "niranjan@gmail.com",
  age: "30",
} as const;

type EmployeeDictionary = {
  [id: string]: Employee;
};
const employeeDictionary: Record<string, Employee> = {
  abc: john,
};
const employees: EmployeeDictionary = {
  johnId: john,
};

type Positions = "Programmer" | "Manager" | "HR";

type PositionsSalaries = Record<Positions, { salary: number }>;

const salaries: PositionsSalaries = {
  Programmer: {
    salary: 100000,
  },
  HR: {
    salary: 100000,
  },
  Manager: {
    salary: 100000,
  },
};
