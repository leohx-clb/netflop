export class Remark {

  private _id: number;
  private _description: string;
  private _author: string;
  private _creationDate: Date;

  private static _remarkLength = 1;


  constructor(description: string, author: string, creationDate: Date) {
    this._id = Remark._remarkLength;
    this._description = description;
    this._author = author;
    this._creationDate = creationDate;

    Remark._remarkLength++;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  set creationDate(value: Date) {
    this._creationDate = value;
  }

  static get remarkLength(): number {
    return this._remarkLength;
  }

  static set remarkLength(value: number) {
    this._remarkLength = value;
  }
}
