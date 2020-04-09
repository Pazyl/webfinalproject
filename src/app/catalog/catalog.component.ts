import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../catalog.service';
import {Movie} from '../movie';
import {ControlDbService} from '../control-db.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  name = '';

  serial = false;
  anime = false;
  film = false;
  finished = false;
  work = false;

  admin = false;

  films: Movie[];

  constructor(private service: CatalogService, private serviceAdmin: ControlDbService) { }

  ngOnInit(): void {
    this.find();
    this.setAdmin();
  }

  find() {
    let status;
    let filter = '';

    if (this.name === '' || this.name === undefined) {
      let status = false;
    } else {
      let status = true;
      filter += 'name_like=' + this.name + '&';
    }

    if (this.film === true) {
      if (status === true) {
        filter += '&catalogType=movies';
      } else {
        filter += 'catalogType=movies';
        status = true;
      }
    }

    if (this.serial === true) {
      if (status === true) {
        filter += '&catalogType=serials';
      } else {
        filter += 'catalogType=serials';
        status = true;
      }
    }

    if (this.anime === true) {
      if (status === true) {
        filter += '&catalogType=anime';
      } else {
        filter += 'catalogType=anime';
        status = true;
      }
    }

    if (this.finished === true) {
      if (status === true) {
        filter += '&status=В работе';
      } else {
        filter += 'status=В работе';
        status = true;
      }
    }

    if (this.work === true) {
      if (status === true) {
        filter += '&status=Завершен';
      } else {
        filter += 'status=Завершен';
        status = true;
      }
    }

    if (status === false) {
      this.service.getAllFilms().subscribe( res => {
        this.films = res;
      });
    } else {
      this.service.getFind(filter).subscribe( res => {
        this.films = res;
      });
    }
  }

  setFilm() {
    if (this.film === false) {
      this.film = true;
    } else {
      this.film = false;
    }
    this.find();
  }

  setAnime() {
    if (this.anime === false) {
      this.anime = true;
    } else {
      this.anime = false;
    }
    this.find();
  }

  setSerial() {
    if (this.serial === false) {
      this.serial = true;
    } else {
      this.serial = false;
    }
    this.find();
  }

  setFinised() {
    if (this.finished === false) {
      this.finished = true;
    } else {
      this.finished = false;
    }
    this.find();
  }

  setWork() {
    if (this.work === false) {
      this.work = true;
    } else {
      this.work = false;
    }
    this.find();
  }

  deleteAnime(id: number) {
    this.service.deleteAnime(id).subscribe(res => {
      this.find();
    }, error => {
      console.error(error);
    });
  }

  setAdmin() {
    this.serviceAdmin.getActivUser(parseInt(localStorage.getItem('userID'))).subscribe(res => {
      if (res.roleID === 100) {
        this.admin = true;
      }
    });
  }
}
