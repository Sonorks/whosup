import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { LoggedUser } from '../_models/LoggedUser';
import alertify from 'alertify.js';
import { map } from 'rxjs/operators';
import { LinkedInService } from 'angular-linkedin-sdk';
//https://www.npmjs.com/package/angular-linkedin-sdk




var alertify = require('alertify.js');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isUserAuthenticatedEmittedValue = false;
  public isInitializedEmittedValue = false;
  public isUserAuthenticated;
  public isInitialized;
  public lastResponse;

  private basicProfileFields = ['id', 'first-name', 'last-name', 'maiden-name', 'formatted-name', 'phonetic-first-name', 'phonetic-last-name', 'formatted-phonetic-name', 'headline', 'location', 'industry', 'picture-url', 'positions'];

  model: any = {};
  user: LoggedUser = new LoggedUser();
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _linkedInService: LinkedInService) { }

  ngOnInit() {
    alertify.logPosition("top right");
  }

  public loginLI() {
    this._linkedInService.login().subscribe(data=>{
      if(data){
        this.rawApiCall();
      } else {
        alertify.error('Error login with LinkedIn');
      }
    });
    
  }

  public rawApiCall() {
    let url =`/people/~:(${this.basicProfileFields.join(',')})?format=json'`;
    this._linkedInService.raw(url)
      .asObservable()
      .subscribe({
        next: (data) => {
          this.lastResponse = data;
          console.log(data);
          sessionStorage.setItem('user', this.lastResponse.formattedName);
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('RAW API call completed');
        }
      });
  }

  login(){
    if(this.model.password == "12345678" && this.model.email == "prueba@gmail.com"){
      sessionStorage.setItem('user', this.model.email);
      alertify.success("Bienvenido "+this.model.email)
      this.router.navigate(['dashboard']);
    }
    else{
      alertify.error("Por favor verifique sus credenciales.");
    }
  }
}
