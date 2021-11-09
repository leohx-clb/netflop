import {Component, Input, OnInit} from '@angular/core';
import {SerialService} from "../../../services/serials/serial.service";

@Component({
  selector: '[app-serial-table-line]',
  templateUrl: './serial-table-line.component.html',
  styleUrls: ['./serial-table-line.component.css']
})
export class SerialTableLineComponent implements OnInit {

  // @ts-ignore
  @Input() id:number;
  // @ts-ignore
  @Input() name:string;
  // @ts-ignore
  @Input() releaseDate: Date;

  constructor(private serialService : SerialService) { }

  ngOnInit(): void {
  }

  onClickDeleteSerial() {
    this.serialService.deleteSerial(this.id);

  }
}
