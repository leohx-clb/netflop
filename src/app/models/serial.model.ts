import {Remark} from "./remark.model";

export class Serial {

  private _id: number;
  private _name: string;
  private _releaseDate: Date;
  private _description: string;
  private _review: string;
  private _picture: string;
  private _remarks: Array<Remark>

  private static _serialLength = 1;


  constructor(name: string, releaseDate: Date, description: string, review: string, picture: string, remarks: Array<Remark>) {
    this._id = Serial._serialLength;
    this._name = name;
    this._releaseDate = releaseDate;
    this._description = description;
    this._review = review;
    this._picture = picture;
    this._remarks = remarks;

    Serial._serialLength++;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get releaseDate(): Date {
    return this._releaseDate;
  }

  set releaseDate(value: Date) {
    this._releaseDate = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get review(): string {
    return this._review;
  }

  set review(value: string) {
    this._review = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get remarks(): Array<Remark> {
    return this._remarks;
  }

  set remarks(value: Array<Remark>) {
    this._remarks = value;
  }

  static get serialLength(): number {
    return this._serialLength;
  }

  static set serialLength(value: number) {
    this._serialLength = value;
  }
}
