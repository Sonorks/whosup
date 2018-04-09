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
import "rxjs/Rx"
import alertify from 'alertify.js';

var alertify = require('alertify.js');

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.component.html',
  styleUrls: ['./complete-register.component.scss'],
  providers: [CompleteRegisterService]
})
export class CompleteRegisterComponent implements OnInit {
  general:any={};
  contact:any={};
  goals:any={};
  focus:any={};
  focusString;
  energy:any={};
  materials:any={};
  life:any={};
  tic:any={};
  cleantech:any={};
  cleantechString;
  tlr:any={};
  trlValue = -1;
  ipProt:any={};
  ipProtValue = -1;
  researchLine:any={};
  researchTeam:any={};
  rlDescription:any={};
  founders:any={};
  filter: any = {};
  actor: Actor = new Actor;
  organization: Organization= new Organization;
  company: Company = new Company;
  rdgroup: RDGroup = new RDGroup;
  investor: Investor = new Investor;
  startup: Startup = new Startup;
  employee: any = new Employee;
  user: User = new User;
  contentLoaded = false;
  energyShow=false;
  countries = this.completeRegisterService.getCountries();
  sizes = this.completeRegisterService.getSizes();
  years = this.completeRegisterService.getYears();
  focusItems;
  energyItems;
  materialsItems;
  lifeItems;
  ticItems;
  cleantechItems;
  tlrItems;
  ipProtItems;
  techs = null;
  cells = null;
  ecosystems;
  buttonLabel = "Register";
  pitchCounter = false;
  summaryCounter = false;
  RLDescriptionCounter = false;
  RLSolveCounter = false;
  RLApplicationCounter = false;
  organizations = this.completeRegisterService.getOrganizations();

  isCompany=false; isRdGroup=false; isStartup=false; isInvestor=false;
  newActor = false;
  permission=true;

  loggedUser = sessionStorage.getItem('user');
  loggedUserId = sessionStorage.getItem('userId');
  constructor(
    private completeRegisterService: CompleteRegisterService
  ) { }

  ngOnInit() {

  }

}
