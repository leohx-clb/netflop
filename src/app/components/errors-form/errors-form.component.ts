import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, NgModel} from "@angular/forms";

@Component({
  selector: 'app-errors-form',
  templateUrl: './errors-form.component.html',
  styleUrls: ['./errors-form.component.css']
})
export class ErrorsFormComponent implements OnInit {

  // @ts-ignore
  @Input() control: AbstractControl | NgModel;
  // @ts-ignore
  @Input() controlLabel: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
