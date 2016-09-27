// from: https://github.com/ng2-ui/ng2-datetime-picker

import {
  Component,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectorRef,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {DateTime} from './datetime';

//@TODO
// . display currently selected day

/**
 * show a selected date in monthly calendar
 */
@Component({
  providers    : [DateTime],
  selector     : 'datetime-picker-popup',
  templateUrl  : './datetime-picker-popup.component.pug',
  styleUrls    : [
    './datetime-picker-popup.component.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DateTimePickerPopupComponent implements AfterViewInit {
  /**
   * public variables
   */
  public dateOnly: boolean;

  public selectedDate: Date; //currently selected date
  public hour: number;
  public minute: number;

  public el: HTMLElement; // this component element
  public monthData: any;  // month calendar data

  public changes: EventEmitter<any> = new EventEmitter();
  public closing: EventEmitter<any> = new EventEmitter();

  @ViewChild('hours')
  private _hours: ElementRef;
  @ViewChild('minutes')
  private _minutes: ElementRef;

  public constructor (elementRef: ElementRef, public dateTime: DateTime, public cdRef: ChangeDetectorRef) {
    this.el = elementRef.nativeElement;
  }

  public ngAfterViewInit (): void {
    if (!this.dateOnly) {
      this._hours.nativeElement.addEventListener('keyup', (e: KeyboardEvent) => {
        e.stopPropagation();
      });
      this._hours.nativeElement.addEventListener('mousedown', (e: KeyboardEvent) => {
        e.stopPropagation();
      });
      this._minutes.nativeElement.addEventListener('keyup', (e: KeyboardEvent) => {
        e.stopPropagation();
      });
      this._minutes.nativeElement.addEventListener('mousedown', (e: KeyboardEvent) => {
        e.stopPropagation();
      });
    }
  }

  public get year (): number {
    return this.selectedDate.getFullYear();
  }

  public get month (): number {
    return this.selectedDate.getMonth();
  }

  public get day (): number {
    return this.selectedDate.getDate();
  }

  public get today (): Date {
    let dt = new Date();
    dt.setHours(0);
    dt.setMinutes(0);
    dt.setSeconds(0);
    dt.setMilliseconds(0);
    return dt;
  }

  public initDateTime (date: Date) {
    date = date || new Date();
    this.selectedDate = date;
    this.hour         = this.selectedDate.getHours();
    this.minute       = this.selectedDate.getMinutes();
    this.monthData    = this.dateTime.getMonthData(this.year, this.month);
  }

  public toDate (year: number, month: number, day: number): Date {
    return new Date(year, month, day);
  }

  public toDateOnly (date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }

  /**
   * set the selected date and close it when closeOnSelect is true
   * @param date {Date}
   */
  public selectDate (dayNum?: number) {
    if (dayNum) {
      this.selectedDate = new Date(this.monthData.year, this.monthData.month, dayNum);
    }
    this.selectedDate.setHours(parseInt( '' + this.hour || '0', 10));
    this.selectedDate.setMinutes(parseInt( '' + this.minute || '0', 10));
    this.changes.emit(this.selectedDate);
    this.closing.emit(true);
  };

  /**
   * show prev/next month calendar
   */
  public updateMonthData (num: number) {
    this.monthData = this.dateTime.getMonthData(this.monthData.year, this.monthData.month + num);
  }

}
