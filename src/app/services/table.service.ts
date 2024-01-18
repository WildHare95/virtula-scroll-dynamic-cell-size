import { Injectable } from '@angular/core';
import {
  IProject,
  generateData, TProjectData, randomIntFromInterval, allProjects, IEmployee, ITotallyMonth
} from "../models/employees";
import {BehaviorSubject, Observable} from "rxjs";
import { map } from "rxjs/operators";
import { DepartmentOptions } from "../models/options";
import * as moment from "moment";
import {Moment} from "moment";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private _timeSheetInformation$: BehaviorSubject<Array<IProject>>;
  public timeSheetInformation$!: Observable<Array<IProject>>;
  public filteredBy: BehaviorSubject<typeof DepartmentOptions[number]> = new BehaviorSubject(DepartmentOptions[0])


  constructor() {
    this._timeSheetInformation$ = new BehaviorSubject(generateData());
    this.timeSheetInformation$ = this._timeSheetInformation$.asObservable()
    this.getCurrentWeek()
  }

  public getFilteredBy(): BehaviorSubject<typeof DepartmentOptions[number]> {
    return this.filteredBy
  }

  public setFilteredBy(filteredDepartment: typeof DepartmentOptions[number]) {
    this.filteredBy.next(filteredDepartment)
  }

  private processArrayToRenderView = (projects: IProject[]): Array<IProject> => {
    const employeeProjectsMap = new Map<number, IProject[]>();

    projects.forEach((project) => {
      const employeeId = project.employeeInfo.id;
      const mappedProjects = employeeProjectsMap.get(employeeId) ?? [];

      employeeProjectsMap.set(employeeId, [...mappedProjects, project]);
    });
    return Array.from(employeeProjectsMap).map(([id, values]) => values)
      .reduce((previousValue, currentValue, currentIndex) => {
        currentValue.forEach((item) => item.currentIndex = currentIndex)
        return [...previousValue, ...currentValue];
    }, [] as IProject[]);
  };

  public filterArrayByDepartmentForView(department: typeof DepartmentOptions[number]): Observable<Array<IProject>> {
    return this.timeSheetInformation$.pipe(
      map((array) => {
        return array.filter(({employeeInfo}) => {
          if(department.id === 1) {
            return employeeInfo
          }
          return employeeInfo.position.id === department.id
        })
      }),
      map(array => this.processArrayToRenderView(array))
    )
  }

  public getEmployeesNameFilteredByDepartment(department: typeof DepartmentOptions[number]): Observable<IEmployee[]> {
    return this.timeSheetInformation$.pipe(
      map(array => array
        .filter((value, index, self) =>
            index === self.findIndex(t =>
              t.employeeInfo.id === value.employeeInfo.id && t.employeeInfo.name === value.employeeInfo.name
            )
        )
        .filter(({ employeeInfo }) => department.id === 1 || employeeInfo.position.id === department.id)
        .map(({ employeeInfo }) => employeeInfo)
      )
    );
  }

  public getEmployeeInformation(personName: IEmployee): Observable<Map<number, ITotallyMonth[]>> {
    const filter = (array: IProject[], personName: IEmployee): Map<number, ITotallyMonth[]> => {
      const mappedArray = new Map<number, ITotallyMonth[]>()
      for (let i = 0; i < array.length; i++) {
        const currentPersonId = array[i]?.employeeInfo?.id;
        if (currentPersonId == null) {
          continue;
        }

        if (currentPersonId < personName.id) {
          continue;
        }

        if (currentPersonId === personName.id) {
          if (!mappedArray.has(personName.id)) {
            mappedArray.set(personName.id, []);
          }

          mappedArray.get(personName.id)!.push(array[i].totallyMonth!);
        }

        if (currentPersonId > personName.id) {
          break;
        }
      }

      return mappedArray
    }
    return this.timeSheetInformation$.pipe(
      map(array => filter(array, personName))
    )
  }

  /* TODO: REMOVE TO "TIME" SERVICE */

  public getProjectsInformationByDateRange(employeeId: number): Array<TProjectData[]> {
    const projectArray: Array<TProjectData[]> = [];
    for (let j = 0; j < randomIntFromInterval(1, 5); j++) {
        projectArray.push(allProjects[randomIntFromInterval(0, allProjects.length - 1)]);
    }
    return projectArray
  }


  public currentRange = (() => new BehaviorSubject({
      weekStart: moment().clone().startOf('isoWeek'),
      weekEnd: moment().clone().endOf('isoWeek')
    })
  )()


  getCurrentWeek(currentDate = moment()) {
    const weekStart = currentDate.clone().startOf('isoWeek');
    const weekEnd = currentDate.clone().endOf('isoWeek');
    return this.currentRange.next({
      weekEnd,
      weekStart
    })
  }

  public getRangeBetweenDates(dateStart: Moment, dateEnd: Moment): Array<Moment> {
    const currentRange = []
    while (dateStart.isSameOrBefore(dateEnd)) {
      currentRange.push(moment(dateStart));
      dateStart.add(1, 'days');
    }
    return [...currentRange]
  }
}
