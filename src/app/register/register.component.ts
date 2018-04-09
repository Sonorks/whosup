import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { User } from '../_models/User';
import alertify from 'alertify.js';

var alertify = require('alertify.js');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: User = {name:'Julian',lastname:'Vasquez G',email:'julivas96@gmail.com',password:'12345678',password2:'12345678'};
  constructor( private service: RegisterService) { }
  ngOnInit() {
    alertify.logPosition("top right");
  }
  
  
  checked(){
    var element = <HTMLInputElement> document.getElementById("terminos");
    var registerhtml = <HTMLElement> document.getElementById("registerComponent");
    if(element.checked==true){
      this.register()
    }
    else{
      alertify.log("To complete the register, you must accept the politics."); 
    }
  }
  register(){
    console.log(this.model.name+" "+this.model.lastname+" "+this.model.email+" "+this.model.password+" "+this.model.password2);
    if(this.model.password != this.model.password2){
      return alertify.error("Passwords must be the same");
    }
    this.service.sendRegister({name:this.model.name,lastname:this.model.lastname,email:this.model.email,password:this.model.password,password2:this.model.password2})
    .subscribe(data => {
      if(data==false){
        return alertify.error("Error creating user.");
      }else{
        console.log(data);
        return alertify.success("An E-mail was sent to confirm your account.");
    }
        
    },
    error => {
      if(error.status==0){
       return alertify.error("Connection error, please try later.");
      }
      
    });
    this.model.name='';
    this.model.lastname='';
    this.model.email='';
    this.model.password='';
    this.model.password2='';
    
    
    
  }
  
}
