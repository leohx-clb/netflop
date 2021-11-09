import {Component, Input, OnInit} from '@angular/core';
import {Serial} from "../../../models/serial.model";

@Component({
  selector: 'app-serial-table',
  templateUrl: './serial-table.component.html',
  styleUrls: ['./serial-table.component.css']
})
export class SerialTableComponent implements OnInit {

  // @ts-ignore
  @Input() serials: Array<Serial>;

  constructor() { }

  ngOnInit(): void {
  }

}
