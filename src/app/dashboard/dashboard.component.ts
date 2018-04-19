import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  model: any={};
  usuario = sessionStorage.getItem('user');
  metricsVisibility = true;
  testsVisibility = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  showMetrics(){
    if(this.metricsVisibility){
      if(this.testsVisibility == true){
        document.getElementById("offers").className = "col-md-9 col-sm-12";
        this.metricsVisibility = false;
      } else {
        document.getElementById("offers").className = "col-md-12 col-sm-12";
        this.metricsVisibility = false;
      }
    }
    else{
      if(this.testsVisibility == true) {
        document.getElementById("offers").className = "col-md-5 col-sm-12";
        this.metricsVisibility = true;
      } else {
        document.getElementById("offers").className = "col-md-8 col-sm-12";
        this.metricsVisibility = true;        
      }
    }
  }
  showTests(){
    if(this.testsVisibility){
      if(this.metricsVisibility == true){
        document.getElementById("offers").className = "col-md-8 col-sm-12";
        this.testsVisibility = false;
      } else { 
        document.getElementById("offers").className = "col-md-12 col-sm-12";
        this.testsVisibility = false;
      }
    }
    else{
      if(this.metricsVisibility == true){
        document.getElementById("offers").className = "col-md-5 col-sm-12";
        this.testsVisibility = true;
      } else { 
        document.getElementById("offers").className = "col-md-9 col-sm-12";
        this.testsVisibility = true;
      }
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
 