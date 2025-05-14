export {};
type Programmer = "Programmer";
type HR = "HR";
type PositionType = Programmer | HR;

const bestProgrammer: Programmer = "Programmer";

type Position = "Programmer" | "HR" | "CEO" | unknown;

function getSalaryForPosition(position: Position): string | undefined {
  if (position === "Programmer") {
    return "10K";
  } else if (position === "HR") return "20K";
  else console.warn(`We Don't Have a Salary for ${position}`);
}

getSalaryForPosition("CEO");
