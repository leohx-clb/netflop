import { Component, OnInit } from '@angular/core';
import {SerialService} from "../../../services/serials/serial.service";
import {Router} from "@angular/router";
import {Serial} from "../../../models/serial.model";

@Component({
  selector: 'app-new-serial',
  templateUrl: './new-serial.component.html',
  styleUrls: ['./new-serial.component.css']
})
export class NewSerialComponent implements OnInit {

  constructor(private serialService:SerialService,private router : Router) { }

  ngOnInit(): void {
  }

  askToAddSerial(serialToAdd: Serial) {
    this.serialService
      .addSerial(serialToAdd)
      .then(()=> {
        this.router.navigateByUrl('home');
      })

  }
}
