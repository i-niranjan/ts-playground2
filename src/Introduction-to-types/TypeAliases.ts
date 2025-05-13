// Type aliases: define the shape of an object

type Position = "Programmer" | "HR";

const myPosition: Position = "Programmer";

type Colleague = {
  name: string;
  age: number;
  position: Position;
  greetBack?: Function;
};

const myColleague: Colleague = {
  name: "John",
  age: 30,
  position: "Programmer",
};

const myOtherColleague: {
  name: string;
  age: number;
  position: Position;
  tasks: string[];
} = {
  name: "Mary",
  age: 30,
  position: "HR",
  tasks: ["HR stuff"],
};

const myTalkyColleague: Colleague = {
  name: "John",
  age: 30,
  position: "Programmer",
  greetBack: () => {
    console.log("Cheers!!!");
  },
};

function greetColleague(colleague: Colleague) {
  console.log("Hi " + colleague.name);
  if (colleague.greetBack) {
    colleague.greetBack();
  }
}

const col1 = greetColleague(myColleague);
const col2 = greetColleague(myOtherColleague); // notice ty
const col3 = greetColleague(myTalkyColleague);
