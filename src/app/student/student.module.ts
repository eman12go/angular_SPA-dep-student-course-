import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule}from '@angular/forms'
import{RouterModule}from '@angular/router'

import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
// import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {StudentRoutingModule} from './student-routing.module'


@NgModule({
  declarations: [
    StudentAddComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule,StudentRoutingModule

  ],
  exports:[
    StudentAddComponent,
    StudentListComponent
  ]
})
export class StudentModule { }
