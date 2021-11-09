import {Component, OnDestroy, OnInit} from '@angular/core';
import {Serial} from "../../models/serial.model";
import {Subscription} from "rxjs";
import {SerialService} from "../../services/serials/serial.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  serials: Array<Serial>;
  // @ts-ignore
  serialsSub: Subscription;

  constructor(private serialService: SerialService) {

  }

  ngOnInit(): void {
    this.serialsSub = this.serialService.serials.subscribe(
      (serials: Array<Serial>)=> {
        this.serials = serials;
      }
    )
  }

  ngOnDestroy(){
    this.serialsSub.unsubscribe();
  }

}
