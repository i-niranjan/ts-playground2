class Engineer {
  tasks?: string[];
}

// Optional Chaining
type Manager = {
  team?: {
    scrumMaster?: {
      holdScrumMeetings: () => void;
    };
  };
};

function manage(manager: Manager) {
  manager.team?.scrumMaster?.holdScrumMeetings();
}

// The Another way is like if we know they must gonna have the methods no need for optional BS
//Then you can replace ? with ! (Not Null) | This is a TS Feature to avoid TS errors
