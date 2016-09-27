export class DateRange {
    constructor(public from: Date, public to: Date) {
        this.from = from;
        this.to = to;
    }

    get isValid(): boolean {
        return  this.to >= this.from;
    }
}
