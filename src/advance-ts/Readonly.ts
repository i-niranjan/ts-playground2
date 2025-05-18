export {};
const CEO = "Jeff";

const CeoObject = {
  //Objects are not immutable
  name: "Jeff" as const, //Now this is immutable
  company: "Amazon",
};

// CeoObject.name = "Bill";

function toUpperCase(names: ReadonlyArray<string>) {
  // ReadonlyArray<string> | readonly string[] Both are same
  //names.push("My Name");   -----> Now becuase of ReadOnly we cannot push anything in arrya while exe. function
  return names.map((name) => {
    return name.toUpperCase();
  });
}
// const theUpper = toUpperCase(["hello", "wolrd"]);
// console.log(theUpper);

type Postion = "Programmer" | "Manager" | "HR" | "Scrum Master";

type Employee = {
  name: string;
  position: Postion;
};

function paySalary(empl: Employee) {
  console.log(`The Pay for ${empl.position} is 1000`);
}

const john = {
  name: "John",
  position: "Programmer",
} as const; //without const it'll throw error because TS doubt us that this nigga still can change the value of an object.

paySalary(john);
