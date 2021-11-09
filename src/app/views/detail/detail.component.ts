import { Component, OnInit } from '@angular/core';
import {SerialService} from "../../services/serials/serial.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Serial} from "../../models/serial.model";
import {Remark} from "../../models/remark.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // @ts-ignore
  serial: Serial;

  constructor(private route: ActivatedRoute, private  serialService: SerialService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.serialService
      .getSerialById(+id)
      .then(
        (serialFound: Serial) => {
          this.serial = serialFound;
          console.log(serialFound.releaseDate);
        }
      )
  }

  askToAddRemark(remarkToAdd: Remark, idSerial: number) {
    this.serialService
      .addRemarkOnSerial(remarkToAdd,idSerial)
      .then(()=>{
        // @ts-ignore
        this.router.navigateByUrl('home');
      })

  }
}
