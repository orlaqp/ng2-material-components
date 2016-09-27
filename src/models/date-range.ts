declare var moment: any;

export class DateRange {
    constructor(public from: moment.Moment, public to: moment.Moment) {
        this.from = from;
        this.to = to;
    }

    get isValid(): boolean {
        return this.from.isValid() && this.to.isValid() && this.to.isAfter(this.from);
    }
}
