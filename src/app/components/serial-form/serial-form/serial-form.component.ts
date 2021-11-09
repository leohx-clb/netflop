import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Serial} from "../../../models/serial.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Remark} from "../../../models/remark.model";

@Component({
  selector: 'app-serial-form',
  templateUrl: './serial-form.component.html',
  styleUrls: ['./serial-form.component.css']
})
export class SerialFormComponent implements OnInit {


  // @ts-ignore
  @Input() title: string;
  // @ts-ignore
  @Input() submitLabel: string;
  @Input() serialToEdit: Serial | undefined;

  @Output() formSubmitted: EventEmitter<Serial>;

  // @ts-ignore
  serialForm: FormGroup;

  // @ts-ignore
  serial: Serial;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Serial>();
  }

  ngOnInit(): void {
    this.initForm();
    if (this.serialToEdit){
      this.serial = this.serialToEdit;
    }
    else {
      const remarksTab = [
        new Remark('','',new Date())
      ]
      this.serial = new Serial('',new Date(),'','','', remarksTab);
    }

  }

  onSubmitSerialForm(){
    if (this.serialForm.valid){
      this.formSubmitted.emit(this.serial);
    }
  }

  private initForm() {
    this.serialForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250)
      ]),
      releaseDate: new FormControl(null, [
        Validators.required
      ]),
      review: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250)
      ]),
      picture: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }


}
