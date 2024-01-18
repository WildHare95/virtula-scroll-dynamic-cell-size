import {ComponentType} from '@angular/cdk/portal';
import {DepartmentOptions} from './options';
import {WorkingDayComponent} from "../virtual-scroll/components/working-day/working-day.component";
import {NonWorkingDayComponent} from "../virtual-scroll/components/non-working-day/non-working-day.component";
import {DayComponent} from "../virtual-scroll/components/day/day.component";


const firstNames = [
  'John',
  'Emma',
  'Michael',
  'Sophia',
  'William',
  'Olivia',
  'James',
  'Ava',
  'Alexander',
  'Isabella',
];
const lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
];
const typeOfWork: Array<TTypeOfWork> = ['Remote', 'Office'];
const grades: Array<TGrades> = [
  'Intern',
  'Junior',
  'Junior +',
  'Middle',
  'Middle +',
  'Senior',
  'Senior +',
  'Solution Architect',
];
const location = {
  address: 'Ukraine, Kharkiv, Otakara Yarosha street, 25',
  countryCode: 'UK',
};

const projectNames = ['Web app', 'IOS app', 'Desktop app', 'Android app'];

const generateRandomName = () => {
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
};

const getTotalHours = (projectWeek: Array<TProjectData>): number => {
  return projectWeek.reduce((previousValue, currentValue) => {
    if ('hours' in currentValue) {
      return !!currentValue.hours
        ? previousValue + currentValue.hours
        : previousValue;
    }
    return previousValue;
  }, 0);
};


const project: Array<TProjectData> = [
  {
    hours: 8,
    dayOff: true,
    byClient: false,
    renderComponent: NonWorkingDayComponent
  },
  {
    hours: 10,
    renderComponent: WorkingDayComponent
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent
  }
];
const project2: Array<TProjectData> = [
  {
    projectInformation: {
      label: 'DM',
      state: 'DM',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NL',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NL',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NP',
      state: 'NPO',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'DM',
      state: 'DM',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'DM',
      state: 'DM',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'DM',
      state: 'DM',
    },
    renderComponent: DayComponent,
  },
];
const project3: Array<TProjectData> = [
  {
    hours: 10,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 10,
    rate: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    rate: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 16,
    salary: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    salary: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
];
const project4: Array<TProjectData> = [
  {
    hours: 8,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    rate: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    rate: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NPO',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NPO',
    },
    renderComponent: DayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
];
const project5: Array<TProjectData> = [
  {
    hours: 8,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    rate: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    rate: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    salary: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    salary: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
];
const project6: Array<TProjectData> = [
  {
    hours: 10,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 10,
    rate: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    projectInformation: {
      label: 'DM',
      state: 'DM',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NL',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'DM',
      state: 'DM',
    },
    renderComponent: DayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
];
const project7: Array<TProjectData> = [
  {
    hours: 8,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 16,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    salary: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
];
const project8: Array<TProjectData> = [
  {
    projectInformation: {
      label: 'NL',
      state: 'NL',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NL',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NL',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NL',
    },
    renderComponent: DayComponent,
  },
  {
    projectInformation: {
      label: 'NL',
      state: 'NL',
    },
    renderComponent: DayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
];
const project9: Array<TProjectData> = [
  {
    hours: 8,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    rate: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    rate: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    salary: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    salary: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
];
const project10: Array<TProjectData> = [
  {
    hours: 10,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 10,
    rate: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    rate: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 16,
    salary: -1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: 8,
    salary: 1,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
  {
    hours: null,
    renderComponent: WorkingDayComponent,
  },
];


export const allProjects = [project9, project8, project7, project6, project5, project4, project3, project2, project10, project]

export interface IProjectInformationNew {
  employeeInfo: IEmployee;
  workWeek: Array<TProjectData>;
  totallyMonth: {
    totalHours: number;
    project: string;
    client: string;
    paymentPlan: string;
    paymentActual: string;
    distinction: string;
    rate: string;
    salary: string;
    developerIncome: string;
    netProfit: string;
    unusedVacation: string;
    compensationForVacation: string;
    staffingStart: string;
    staffingEnd: string;
    comment: string;
  };
}

type TGrades =
  | 'Intern'
  | 'Junior'
  | 'Junior +'
  | 'Middle'
  | 'Middle +'
  | 'Senior'
  | 'Senior +'
  | 'Solution Architect';
type TTypeOfWork = 'Remote' | 'Office';

export interface IEmployee {
  id: number;
  name: string;
  grade: TGrades;
  location: {
    countryCode: string;
    address: string;
  };
  position: typeof DepartmentOptions[number];
  typeOfWork: TTypeOfWork;
}

export interface IPayment {
  type: 'payment';
  value: string;
  profit?: boolean;
}

export interface ITotallyMonth {
  totalHours: number;
  project: IProjectName;
  client: string;
  paymentPlan: IPayment;
  paymentActual: IPayment;
  distinction: IPayment;
  rate: {
    type: 'rate';
    data: Array<IRate>;
  };
  salary: IPayment;
  developerIncome: IPayment;
  netProfit: IPayment;
  unusedVacation: string;
  compensationForVacation: IPayment;
  staffingStart: string;
  staffingEnd: string;
  comment: string;
}

export interface IProject {
  currentIndex?: number,
  dNone: boolean;
  rowSpan: number;
  employeeInfo: IEmployee;
  workHours: Array<TProjectData> | null;
  totallyMonth: ITotallyMonth;
  openingRow?: boolean;
  closingRow?: boolean;
}

export interface IRate {
  date: Date;
  rate: TRate
  amount: number
}

export interface IProjectInformation {
  projects: Array<IProject>;
  employeeLength: number;
}

interface IWorkDay {
  hours: number | null;
  rate?: TRate;
  salary?: TSalary;
  renderComponent: ComponentType<WorkingDayComponent>;
}

interface INonWorkingDay {
  hours: number;
  dayOff: boolean;
  vacation: boolean;
  byClient: boolean;
  renderComponent: ComponentType<NonWorkingDayComponent>;
}

type TRate = -1 | 0 | 1;
type TSalary = -1 | 0 | 1;

export type TProjectWorkDayOff = Omit<INonWorkingDay, 'vacation'> & {
  vacation?: never;
};
export type TProjectWorkDayVacation = Omit<INonWorkingDay, 'dayOff'> & {
  dayOff?: never;
};

export type TDaySalary = Omit<IWorkDay, 'salary'> & { salary?: never } & {
  byClient?: never;
};
export type TDayRate = Omit<IWorkDay, 'rate'> & { rate?: never } & {
  byClient?: never;
};

export interface IProjectStateDay {
  colSpan?: number;
  rowSpan?: number;
  projectInformation: {
    label: TProjectStateLabel;
    state: TProjectState;
  };
  renderComponent: ComponentType<DayComponent>;
}

export type TProjectData =
  | TProjectWorkDayOff
  | TProjectWorkDayVacation
  | IProjectStateDay
  | TDaySalary
  | TDayRate;

export type TProject = 'CP' | 'V' | 'NCP' | 'SP';

export interface IProjectName {
  type: 'project';
  typeOfProject: 'commercial' | 'non-commercial' | 'vacation' | 'second-project';
  projectName: string;
}

const typeOfProject: Array<'commercial' | 'non-commercial' | 'vacation' | 'second-project'> =
  ['commercial', 'non-commercial', 'vacation', 'second-project'];

export type TProjectInformation = string | IProjectName;
/*

CP - Commercial project
V - Vacation
NPC - Non-commercial project
SP - Second project

*/

export type TProjectStateLabel = 'NP' | 'NL' | 'DM';
export type TProjectState = 'NPO' | 'NPS' | 'DM' | 'NL';
/*

NPO - Project is over
NPS - Project hasn't started yet
DM - Dismissal
NL - Non-paid leave

*/


const generateEmployee = (k: number): IEmployee => {
  return {
    id: k + 1,
    name: generateRandomName(),
    position:
      DepartmentOptions[
        Math.floor(Math.random() * DepartmentOptions.length)
        ],
    grade: grades[Math.floor(Math.random() * grades.length)],
    location,
    typeOfWork: typeOfWork[Math.floor(Math.random() * typeOfWork.length)],
  };
};

const generateProject = (employee: IEmployee): IProject => {
  return {
    dNone: false,
    rowSpan: 1,
    employeeInfo: employee,
    workHours: allProjects[randomIntFromInterval(0, allProjects.length - 1)],
    totallyMonth: {
      totalHours: getTotalHours(project),
      project: {
        type: 'project',
        typeOfProject: typeOfProject[Math.floor(Math.random() * typeOfProject.length)],
        projectName: projectNames[Math.floor(Math.random() * projectNames.length)],
      },
      client: generateRandomName(),
      paymentPlan: {
        type: 'payment',
        value: '1500',
      },
      paymentActual: {
        type: 'payment',
        value: '2000',
      },
      distinction: {
        type: 'payment',
        value: '-500',
      },
      rate: {
        type: 'rate',
        data: [
          {
            rate: (randomIntFromInterval(-1, 1) as TRate),
            amount: randomIntFromInterval(10, 20),
            date: new Date,
          },
          {
            rate: (randomIntFromInterval(-1, 1) as TRate),
            amount: randomIntFromInterval(10, 20),
            date: new Date,
          },
          {
            rate: (randomIntFromInterval(-1, 1) as TRate),
            amount: randomIntFromInterval(10, 20),
            date: new Date,
          },
        ]
      },
      salary: {
        type: 'payment',
        value: '2300',
      },
      developerIncome: {
        type: 'payment',
        value: '2300',
      },
      netProfit: {
        type: 'payment',
        value: randomIntFromInterval(-200, 1500).toString(),
        profit: true,
      },
      unusedVacation: '0',
      compensationForVacation: {
        type: 'payment',
        value: '0',
      },
      staffingStart: '2016-03-22',
      staffingEnd: '2016-03-22',
      comment: 'the rate rose by $14',
    },
  }
};

export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateData = (): Array<IProject> => {
  const arrayOfEmployees: Array<IEmployee> = Array.from(
    {length: 200},
    (v, k) => {
      return generateEmployee(k)
    }
  );

  const projectArray: Array<IProject> = [];
  for (let i = 0; i < arrayOfEmployees.length; i++) {
    for (let j = 0; j < randomIntFromInterval(1, 5); j++) {
      projectArray.push(generateProject(arrayOfEmployees[i]));
    }
  }

  return projectArray;
};

export const generateEmployeeData = (): Array<IEmployee> => {
  return Array.from({length: 200}, (v, k) => generateEmployee(k));
};

export interface IMock {
  currentIndex?: number,
  employeeInfo: {
    id: number;
  };
  isNull: boolean;
  lastRow?: true;
}

const mapEmployeeProjects = (projects: IProject[]): IProject[] => {
  const employeeProjectsMap = new Map<number, IProject[]>();

  projects.forEach((project) => {
    const employeeId = project.employeeInfo.id;
    const mappedProjects = employeeProjectsMap.get(employeeId) ?? [];

    employeeProjectsMap.set(employeeId, [...mappedProjects, project]);
  });

  return Array.from(employeeProjectsMap)
    .map(([id, values]): [number, IProject[]] => {
      const first = values[0];
      const last = values[values.length - 1];

      values.forEach((item, index) => {
        item.rowSpan = values.length - index;
        if (index !== 0) {
          item.dNone = true;
        } else {
          item.dNone = false;
        }

      });

      return [id, [first, ...values.slice(1, values.length - 1), last]];
    })

    .reduce((projects, projectMap) => {
      return [...projects, ...projectMap[1]];
    }, [] as any);
};




