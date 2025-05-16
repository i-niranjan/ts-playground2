export {};

type objectWithTeam = {
  team: string;
};

type Programmer = objectWithTeam & {
  name: string;
  language: string;
};

function updateTeam<T extends objectWithTeam>(arg: T, newTeam: string): T {
  arg.team = newTeam;

  return arg;
}

let empl1 = {
  name: "John",
  language: "C#",
  team: "CoolTeam",
  lang: "French",
};
updateTeam(empl1, "SuperCoolTeam");

type OldSchoolProgrammer<T extends "Basic" | "Lisp" = "Basic"> = {
  language: T;
  name: string;
};

const myCoolColleague: OldSchoolProgrammer<"Lisp"> = {
  language: "Lisp",
  name: "John",
};
