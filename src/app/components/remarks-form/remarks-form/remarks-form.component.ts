import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Remark} from "../../../models/remark.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-remarks-form',
  templateUrl: './remarks-form.component.html',
  styleUrls: ['./remarks-form.component.css']
})
export class RemarksFormComponent implements OnInit {

  // @ts-ignore
  @Input() remarks: Array<Remark>;

  @Output() formSubmitted: EventEmitter<Remark>;

  // @ts-ignore
  remarkForm: FormGroup;
  // @ts-ignore
  remark: Remark;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Remark>();
  }

  ngOnInit(): void {
    this.initForm();
    this.remark = new Remark('','',new Date());
  }

  onSubmitRemarkForm() {
    if (this.remarkForm.valid){
      this.formSubmitted.emit(this.remark);
    }
  }

  private initForm() {
    this.remarkForm = this.fb.group({
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250)
      ]),
    })
  }
}
