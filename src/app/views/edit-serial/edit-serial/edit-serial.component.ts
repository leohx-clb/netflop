import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SerialService} from "../../../services/serials/serial.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Serial} from "../../../models/serial.model";

@Component({
  selector: 'app-edit-serial',
  templateUrl: './edit-serial.component.html',
  styleUrls: ['./edit-serial.component.css']
})
export class EditSerialComponent implements OnInit {

  // @ts-ignore
  serial: Serial;


  constructor(private route: ActivatedRoute, private serialService: SerialService, private router: Router) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.serialService
      .getSerialById(+id)
      .then((serialFound: Serial) => {
        this.serial = serialFound
      });
  }

  askToEditSerial(editedSerial: Serial) {

    this.serialService
      .editSerial(editedSerial)
      .then(()=>{
        this.router.navigate(['/home'])
      });
  }
}
