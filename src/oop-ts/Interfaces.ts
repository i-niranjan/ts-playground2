export {};

// interfaces: contract between code components

interface HrManager {
  getAllSalaries(): string[];
}

interface ScrumMaster {
  holdScrumMeeting(): void;
}

class SwissArmyKnife implements HrManager, ScrumMaster {
  getAllSalaries(): string[] {
    return [];
  }
  holdScrumMeeting(): void {
    console.log("Holding scrum meeting ... ");
  }
}

class Project extends SwissArmyKnife {
  name: string;
  budget: number;

  constructor(name: string, budget: number, scrumMaster: ScrumMaster) {
    super(); //calls parent constructor of SwissArmyKnife
    this.name = name;
    this.budget = budget;
  }

  holdProjectMeeting() {
    this.holdScrumMeeting();
  }
  reviewSalaries() {
    console.log(this.getAllSalaries()); // inherited from SwissArmyKnife
  }
}

const superManager = new SwissArmyKnife();
const basicProject = new Project("Basic project", 100, superManager);

// TS vs other languages:
// Interfaces: cannot use instanceOf on TS interfaces, only on classes
// Constructors: TS doesn't support multiple constructors, it supports optional function parameters
basicProject.holdProjectMeeting();
