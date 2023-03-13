import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import{RouterModule,Routes}from '@angular/router'
import{HttpClientModule}from '@angular/common/http'

import { AppComponent } from './app.component';
import {CourseModule}from './course/course.module'
import {StudentModule}from './student/student.module'
import {CoreModule}from './core/core.module'
import { StudentService } from './_services/student.service';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
// import {HeaderComponent,PanelComponent,FooterComponent} from './core/core.module'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,CoreModule,AppRoutingModule,HttpClientModule

  ],
  // providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
