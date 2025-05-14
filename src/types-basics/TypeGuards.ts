export {};

type Salary = {
  amount: number;
};

// Type guard: narrow down an object
// Type predicate
function isSalary(arg: any): arg is Salary {
  return (
    "amount" in arg &&
    typeof arg === "object" &&
    arg !== null &&
    typeof arg.amount === "number"
  );
}

function paySalary(arg: object) {
  if (isSalary(arg)) {
    // here arg is of type Salary
    console.log(`Paying ${arg.amount}`);
  }
}

paySalary({ amount: "20000" });
