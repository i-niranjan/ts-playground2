import { randomBytes } from "crypto";

type Employee = {
  name: string;
  id: string;
  email: string;
  salary: number;
};

function generateRandonId() {
  return randomBytes(10).toString("hex");
}

const createEmployee = (employeeName: string, salary: number): Employee => {
  return {
    name: employeeName,
    id: generateRandonId(),
    email: `${employeeName}@gmail.com`,
    salary: salary,
  };
};

const peter = createEmployee("Peter", 10000);
const Dan = createEmployee("Dan", 10000);
const allNewEmp = [peter, Dan];

// console.log(allNewEmp);

const sendWelcomeMessage = (employee: Employee) => {
  console.log(`To ${employee.email}
        Hello ${employee.name} Welcome ,
        Your salary will be ${employee.salary}
        `);
};

allNewEmp.forEach((employee) => sendWelcomeMessage(employee));
