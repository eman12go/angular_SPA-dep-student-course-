import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import{ CourseRoutingModule}from './course-routing.module'
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDetailsComponent } from './course-details/course-details.component'
import { CourseEditComponent } from './course-edit/course-edit.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseAddComponent,
    CourseDetailsComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,SharedModule,
    RouterModule,CourseRoutingModule
  ]
})
export class CourseModule { }
