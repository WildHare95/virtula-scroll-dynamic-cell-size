import { Injectable } from '@angular/core';
import * as moment from "moment";
import {Moment} from "moment";
import {randomIntFromInterval} from "../models/employees";

export interface IDayInformation {
  dateOfChange: Moment;
  cause: string;
  amount: number;
  weekId: number;
  weeklyChanges: number;
  createdBy: string;
  createdAt: string
  rowSpan: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeeklyChangesService {


  /* TODO: defineLocale back if need */
  constructor() {
    moment.defineLocale('en-foo', {
      parentLocale: 'en',
      week: {
        dow: 3
      }
    });
  }


  public getWeeklyChanges(): Map<number, Array<IDayInformation>> {
    const currentDate = moment()

    const startWeekDate = currentDate.clone()
    const endWeekDate = currentDate.clone().add(2, 'weeks');

    // const weeklyDatesAsObj: {[key: number]: Array<IDayInformation>} = {}

    const weeklyDatesAsObjMapped = new Map()

    let weekId = 0
    let weekNumber = startWeekDate.week();
    while (startWeekDate.isSameOrBefore(endWeekDate)) {

      if (startWeekDate.week() !== weekNumber) {
        weekNumber = startWeekDate.week();
        weekId++
      }

      const dayInformation: IDayInformation = {
        dateOfChange: startWeekDate.clone(),
        amount: randomIntFromInterval(-1500, 1500),
        cause: 'Start Inna Kolesnik in project “Programway”',
        weeklyChanges: randomIntFromInterval(-1500, 1500),
        createdBy: 'Vladimira Alexandrovna Lysytsia-Maliushyna',
        createdAt: moment().format('YYYY-MM-DD') + ' EST',
        weekId,
        rowSpan: 0
      }

      const startWeekDateWeekNumber = startWeekDate.clone().week();
      const dayInformationArray = weeklyDatesAsObjMapped.get(startWeekDateWeekNumber);


      if (!dayInformationArray) {
        dayInformation.rowSpan = 1
        weeklyDatesAsObjMapped.set(startWeekDateWeekNumber, [dayInformation]);
      } else {
        dayInformation.rowSpan = dayInformationArray[dayInformationArray.length - 1].rowSpan + 1
        dayInformationArray.push(dayInformation);
        weeklyDatesAsObjMapped.set(startWeekDateWeekNumber, dayInformationArray);
      }



      startWeekDate.add(1, 'days')
    }



    return weeklyDatesAsObjMapped
  }
}
