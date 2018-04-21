import { Component, OnInit } from '@angular/core';
import { CompleteRegisterService } from './complete-register.service';
import { Organization } from '../_models/Organization';
import { Company } from '../_models/Company';
import { RDGroup } from '../_models/RDGroup';
import { Investor } from '../_models/Investor';
import { Startup } from '../_models/Startup';
import { Actor } from '../_models/Actor';
import { Employee } from '../_models/Employee';
import { User } from '../_models/User';
import alertify from 'alertify.js';

var alertify = require('alertify.js');

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.component.html',
  styleUrls: ['./complete-register.component.scss'],
  providers: [CompleteRegisterService]
})
export class CompleteRegisterComponent implements OnInit {
  isJava= false; isPhp= false; isAngular= false; isReact= false;
  showTechs = true;
  newActor = false;
  permission = true;

  loggedUser = sessionStorage.getItem('user');
  loggedUserId = sessionStorage.getItem('userId');
  constructor(
    private completeRegisterService: CompleteRegisterService
  ) { }

  setVisibility(tech) {
    this.showTechs = false;
    if (tech === 'java') {
      this.isJava = true;
    }else if (tech === 'php') {
      this.isPhp = true;
    }else if (tech === 'angular') {
      this.isAngular = true;
    }else if (tech === 'react') {
      this.isReact = true;
    }
  }

  ngOnInit() {

  }

}
