import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { CourseAddComponent } from './course-add/course-add.component';
import {CourseDetailsComponent  } from './course-details/course-details.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import {CourseListComponent  } from './course-list/course-list.component';

const routes: Routes = [
  {path:"add",component:CourseAddComponent},
  {path:"list",component:CourseListComponent},
  {path:"edit/:id",component:CourseEditComponent},
  {path:"",component:CourseListComponent},
  {path:"details/:id",component:CourseDetailsComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
