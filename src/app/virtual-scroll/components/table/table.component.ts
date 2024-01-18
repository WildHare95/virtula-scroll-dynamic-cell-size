import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from "@angular/core";
import { IProject, TProjectData } from "../../../models/employees";
import { Moment } from "moment";
import { switchMap } from "rxjs";
import {
  CdkVirtualScrollViewport,
  FixedSizeVirtualScrollStrategy,
  VIRTUAL_SCROLL_STRATEGY
} from "@angular/cdk/scrolling";
import { TableService } from "../../../services/table.service";
import { map } from "rxjs/operators";
import * as moment from "moment/moment";
import { KeyValue } from "@angular/common";

type CustomCdkVirtualScrollViewport = CdkVirtualScrollViewport & { detectChanges?: () => void }

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 350, 350);
  }

  override attach(viewport: CustomCdkVirtualScrollViewport): void {
    viewport.detectChanges = () => {
      this.processCell();
    }

    super.attach(viewport);
  }

  override detach(): void {
    super.detach();
  }

  processRows(rows: HTMLTableRowElement[]) {
    rows.forEach((item) => {
      const cells = Array.from(item.cells);
      cells.forEach((cell) => {
        if (cell.getAttribute('info')) {
          cell.classList.add('d-none');
        }
      });
      this.renderFirstCellStyles(rows[0], rows.length);
    });
  }


  renderFirstCellStyles(rows: HTMLTableRowElement, rowSpan: number) {
    Array.from(rows.cells).forEach((cell) => {
      if (cell.getAttribute('info')) {
        cell.classList.remove('d-none');
        cell.setAttribute('rowspan', rowSpan.toString());
      }
    });
  }

  processCell() {
    const element = document.getElementById('tbody') as HTMLTableElement;
    const elementRows = Array.from(element.rows);
    const projects: { [id: number]: HTMLTableRowElement[] } =
      elementRows.reduce((previousValue, currentValue) => {
        const id = +currentValue.getAttribute('id')!;
        if (!previousValue[id]) {
          previousValue[id] = [];
        }
        previousValue[id].push(currentValue);
        return previousValue;
      }, {} as { [id: number]: HTMLTableRowElement[] });

    for (const projectId of Object.keys(projects)) {
      const data = projects[+projectId];
      this.processRows(data);
      this.processWillMergeWorkCells(data)
    }
  }

  processWillMergeWorkCells(rows: HTMLTableRowElement[]) {
    const allWeeks: HTMLTableCellElement[][] = []
    rows.forEach((row) => {
      const cells = Array.from(row.cells)
      const week: HTMLTableCellElement[] = []
      cells.forEach((cell) => {
        if (cell.getAttribute('day')) {
          week.push(cell)
        }
      })
      allWeeks.push(week)
    })

    this.resetSpans(allWeeks)
    this.mergeCells(allWeeks)
  }

  mergeCells(arrayOfWeeks: HTMLTableCellElement[][]) {
    for (let i = 0; i < arrayOfWeeks.length; i++) {
      const week = arrayOfWeeks[i]
      if (week.length === 0) {
        continue
      }

      for (let j = week.length - 1; j >= 0; j--) {
        const cell = week[j]
        const nextCell = week[j + 1]
        if (!nextCell) {
          continue
        }

        const dayData: TProjectData = JSON.parse(cell.getAttribute('day-data')!)
        const nextDayData: TProjectData = JSON.parse(nextCell.getAttribute('day-data')!)
        if ("projectInformation" in dayData && 'projectInformation' in nextDayData) {
          if (nextDayData.projectInformation.state === dayData.projectInformation.state) {
            nextCell.classList.add('d-none')
            cell.colSpan = cell.colSpan + nextCell.colSpan
          }
        }
      }
    }

    for (let i = 0; i < arrayOfWeeks[0].length; i++) {
      for (let j = arrayOfWeeks.length - 1; j >= 0; j--) {

        if (arrayOfWeeks[j].length === 0) {
          continue
        }

        if (!arrayOfWeeks[j - 1]) {
          continue
        }

        const cell = arrayOfWeeks[j][i]
        const nextCell = arrayOfWeeks[j - 1][i]

        if (cell.classList.contains('d-none')) {
          continue
        }


        if (cell.colSpan === nextCell.colSpan) {
          const dayData: TProjectData = JSON.parse(cell.getAttribute('day-data')!)
          const nextDayData: TProjectData = JSON.parse(nextCell.getAttribute('day-data')!)

          if ('projectInformation' in dayData && 'projectInformation' in nextDayData) {
            if (dayData.projectInformation.state === nextDayData.projectInformation.state) {
              cell.classList.add('d-none')
              nextCell.rowSpan = nextCell.rowSpan + cell.rowSpan
            }
          }
        }

      }
    }
  }

  resetSpans(arrayOfWeeks: HTMLTableCellElement[][]) {
    for (let i = 0; i < arrayOfWeeks.length; i++) {
      const week = arrayOfWeeks[i]
      for (let j = 0; j < week.length; j++) {
        const item = week[j]
        item.classList.remove('d-none')
        item.rowSpan = 1
        item.colSpan = 1
      }
    }
  }

  override onContentRendered(): void {
    this.processCell();
    super.onContentRendered();
  }

  override onContentScrolled(): void {
    super.onContentScrolled();
  }

  override onDataLengthChanged(): void {
    this.processCell();
    super.onDataLengthChanged();
  }

  override onRenderedOffsetChanged(): void {
    super.onRenderedOffsetChanged();
  }

  override scrollToIndex(index: number, behavior: ScrollBehavior): void {
    super.scrollToIndex(index, behavior);
  }

  override updateItemAndBufferSize(itemSize: number, minBufferPx: number, maxBufferPx: number): void {
    super.updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx);
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: CustomVirtualScrollStrategy,
    },
  ],
})
export class TableComponent implements OnInit, OnDestroy {

  public arrayOfNames: Array<IProject> | null = null;
  public currentRange: Moment[] = []

  constructor(
    public tableService: TableService,
    private currentTag: ElementRef,
    private _cdr: ChangeDetectorRef,
  ) {}

  @ViewChild(CdkVirtualScrollViewport) viewPort!: CustomCdkVirtualScrollViewport;
  @ViewChild('touchScroll') touchScrollContainer!: ElementRef<HTMLDivElement>

  ngOnInit(): void {
    this.tableService.filteredBy
      .pipe(
        switchMap((department) => this.tableService.filterArrayByDepartmentForView(department)),
      ).subscribe({
        next: (data) => {
          this.arrayOfNames = data;
          setTimeout(() => {
            this._cdr.detectChanges();
            this.viewPort?.detectChanges?.()
          }, 0)
        },
      }
    )

    this.tableService.currentRange
      .pipe(
        map(({weekEnd, weekStart}) => {
          return this.tableService.getRangeBetweenDates(moment(weekStart), moment(weekEnd))
        })
      )
      .subscribe((data) => {
        this.currentRange = data
      })
  }

  public isWorkingDay(day: TProjectData) {
    return 'hours' in day;
  }

  public isCurrentDay(index: number) {
    return this.currentRange[index].isSame(new Date(), 'day')
  }

  public isWeekEnd(index: number) {
    return this.currentRange[index].isoWeekday() === 6 || this.currentRange[index].isoWeekday() === 7
  }

  public isCurrentDate(day: Moment) {
    return day.isSame(new Date(), 'day')
  }

  public JSONStringify(day: any) {
    return JSON.stringify(day)
  }

  public originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
    return 0;
  }

  public switchDate(direction: -1 | 1) {
    if (direction === -1) {
      const currentDate = moment(this.currentRange[0]).add(direction, 'days');
      this.tableService.getCurrentWeek(currentDate)
    } else if (direction === 1) {
      const currentDate = moment(this.currentRange[this.currentRange.length - 1]).add(direction, 'days');
      this.tableService.getCurrentWeek(currentDate)
    }
  }

  public scrollFn(event: TouchEvent, behavior: 'smooth' | 'auto') {
    event.preventDefault()
    const currentYCoords = event.touches[0].pageY - this.currentTag.nativeElement.offsetTop
    const scrollHeight = this.touchScrollContainer.nativeElement.offsetHeight
    // @ts-ignore
    const scrollTrackHeight = this.viewPort.elementRef.nativeElement.childNodes[1].offsetHeight
    const currentPosition = (currentYCoords * scrollTrackHeight) / scrollHeight
    this.viewPort.elementRef.nativeElement.scrollTo({top: currentPosition, behavior})

  }

  ngOnDestroy(): void {
  }
}
