import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule}from '@angular/forms'
import{RouterModule}from '@angular/router'

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';


@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDetailsComponent,
    DepartmentEditComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,FormsModule,RouterModule
  ]
})
export class DepartmentModule { }
