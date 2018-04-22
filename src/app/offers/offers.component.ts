import { Component, OnInit } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import alertify from 'alertify.js';

const alertify = require('alertify.js');

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor() { }

  nuevaPublicacion = false;

  nuevaPublicacionShow(bool) {
    this.nuevaPublicacion = bool;
  }

  anadirPublicacion() {
    alertify.success('La publicación ha sido creada exitosamente.');
    this.nuevaPublicacionShow(false);
  }

  postularse() {
    alertify.success('Tu datos fueron enviados al perfil ofertante.');
  }

  ngOnInit() {
    alertify.logPosition('top right');
  }

}
