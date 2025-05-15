type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplicatedJob = {
  codingLanguage: string;
  sourceControl: string;
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
};

type QaJob = {
  scriptingLanguage: string;
  hasAutomatedTests: true;
};

let simpleJob: SimpleJob = { codingLanguage: "TS", sourceControl: "git" };

let complicatedJob: ComplicatedJob = {
  codingLanguage: "TS",
  sourceControl: "git",
  hasManyMeetings: true,
  reportsToBeCompleted: ["hourly", "daily", "weekly"],
};

let qaJob: QaJob = {
  scriptingLanguage: "Python",
  hasAutomatedTests: true,
};

simpleJob = complicatedJob;
complicatedJob = simpleJob as ComplicatedJob; //This is the Type Assertion
complicatedJob = qaJob as unknown as ComplicatedJob; //Qa job doesnt have any feilds in common thats why we have to do double assertions here

// same meaning:
complicatedJob = <ComplicatedJob>simpleJob;
complicatedJob = <ComplicatedJob>(<unknown>qaJob);

// usage: build objects in steps:
// advantage: autocomplete assistance
// disadvantage: the compiler won't complain about incomplete objects
const complicatedJobMadeInSteps = {} as ComplicatedJob;
complicatedJobMadeInSteps.codingLanguage = "C#";
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = [];
complicatedJobMadeInSteps.sourceControl = "git";

export {};
