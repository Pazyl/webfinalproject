import { Injectable } from '@angular/core';
import {ControlDbService} from './control-db.service';
import {User} from './Objects/user';

@Injectable({
  providedIn: 'root'
})
export class AddListService {
  user: User;

  constructor(private service_db: ControlDbService) { }

  addLike(userID, id) {
    this.service_db.getActivUser(userID).subscribe(res => {
      let value = true;
      for (let i = 0; i < res.likes.length; i++) {
        if (res.likes[i] === id) {
          value = false;
        }
      }

      if (value === true) {
        res.likes.push(id);
        this.service_db.updateUser(res).subscribe();
      }
    });


  }

  addZakladki(userID, id) {
    this.service_db.getActivUser(userID).subscribe(res => {
      let value = true;
      for (let i = 0; i < res.zakladki.length; i++) {
        if (res.zakladki[i] === id) {
          value = false;
        }
      }

      if (value === true) {
        res.zakladki.push(id);
        this.service_db.updateUser(res).subscribe();
      }
    });
  }



}
