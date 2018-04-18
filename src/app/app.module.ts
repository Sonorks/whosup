import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterService } from './register/register.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompleteRegisterComponent } from './complete-register/complete-register.component';
import { FilterPipe } from './filter.pipe';
import { LinkedInSdkModule } from 'angular-linkedin-sdk';
import { OffersComponent } from './offers/offers.component';
import { MetricsComponent } from './metrics/metrics.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    CompleteRegisterComponent,
    FilterPipe,
    OffersComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot(),
    LinkedInSdkModule
  ],
  providers: [RegisterService, 
  { provide: 'apiKey', useValue: '77y35srwkzgale'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
