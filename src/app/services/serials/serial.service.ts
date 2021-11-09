import { Injectable } from '@angular/core';
import {Serial} from "../../models/serial.model";
import {BehaviorSubject} from "rxjs";
import {Remark} from "../../models/remark.model";

@Injectable({
  providedIn: 'root'
})
export class SerialService {

  serials: BehaviorSubject<Array<Serial>>;

  constructor() {

    const remarksTab = [
      new Remark('test remark push','leonard',new Date()),
    ]
    const remarksTabClear = [
      new Remark('','',new Date()),
    ]

    const serialsToPush = [
      new Serial('Squide games',new Date(),'456 personnes, qui ont toutes des difficultés financières dans la vie, sont invitées à prendre part à une mystérieuse compétition de survie. Participant à une série de jeux traditionnels pour enfants mais avec des rebondissements mortels, elles risquent leur vie pour concourir pour un prix de 45,6 milliards de wons (soit environ 32 millions d\'euros).','Critique mais ça clic','https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/03/226517130.jpg', remarksTab),
      new Serial('Alice in the borderland',new Date(2021, 9, 10),'Un jeune homme passionné de jeux vidéo se retrouve avec ses deux amis dans un Tokyo alternatif où ils doivent disputer de dangereuses parties pour survivre.','Critique mais ça clic','https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXlt7Skny36UA9hDgsK0f_vScFeMVe1nCvHp9HhqiI5iIkK2BqUahsgOb7OQshh5JUFjPGRU3iHd8hIgBDtbZKvnxXs7.jpg?r=601',remarksTabClear),
    ];
    this.serials = new BehaviorSubject<Array<Serial>>(serialsToPush);
  }

  getSerialById(serialId: number): Promise<Serial> {
    return new Promise<Serial>(
      (res, rej) => {

        const serials = this.serials.getValue();

        for (let serial of serials) {
          if (serial.id === serialId) {
            res(serial);
            break;
          }
        }
      }
    );
  }

  addSerial(serialToAdd: Serial): Promise<void> {
    return  new Promise<void>(
      (res,rej)=> {
        setTimeout(() => {

          const serials = this.serials.getValue();
          serials.push(serialToAdd);
          this.serials.next(serials);
          res();

        }, 500);
      }
    )
  }

  editSerial(editedSerial: Serial) {

    return new Promise<void>(
      (res, rej) => {

        setTimeout(() => {

          const serials = this.serials.getValue();

          for (let [index, serial] of serials.entries()) {
            if (serial.id === editedSerial.id) {
              serials[index] = editedSerial;
              this.serials.next(serials);
              res();
              break;
            }
          }

        }, 500);

      }
    );
  }

  addRemarkOnSerial(remarkToAdd: Remark, idSerial: number) {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const serials = this.serials.getValue();
          for (let serial of serials) {
            if (serial.id === idSerial) {

              const remarks = serial.remarks;
              remarks.push(remarkToAdd);
              res();
              break;
            }
          }

        }, 500);

      }
    );
  }

  deleteSerial(serialIdToDelete: number) {

    const serials = this.serials.getValue();

    for (let [index, serial] of serials.entries()) {
      if (serial.id === serialIdToDelete) {
        serials.splice(index, 1);
        this.serials.next(serials);
        break;
      }
    }
  }
}
