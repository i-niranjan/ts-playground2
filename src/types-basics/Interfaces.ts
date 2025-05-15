interface SimpleJob {
  codingLanguage: string;
  sourceControl: string;
}

interface ComplicatedJob extends SimpleJob {
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
}

let complicatedJob: ComplicatedJob = {
  codingLanguage: "TS",
  sourceControl: "git",
  hasManyMeetings: true,
  reportsToBeCompleted: ["hourly", "daily", "weekly"],
};

interface MeetingHolder {
  meetingMaxLength: number;
  holdMeeting: () => void;
}

interface MeetingHolder {
  endMeeting: () => void;
}

class ProjectManager implements MeetingHolder {
  meetingMaxLength = 60;
  holdMeeting = () => {
    console.log("Just holding a meeting");
  };
  endMeeting = () => {
    console.log("Finally the meeting ended");
  };
}

export {};

//Diff Betn Types & Interface
//1. Syntax Types is like declaring objects, Interface is like declaring Function
//2. TS has Declaration Merging Feature
//3. In Only Types we Can use Literal Types,  Interface doesn't provide anything like this
