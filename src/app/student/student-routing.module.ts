import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';

import{StudentAddComponent}from './student-add/student-add.component'
import{StudentEditComponent}from './student-edit/student-edit.component'
import{StudentDetailsComponent}from './student-details/student-details.component'
import{StudentListComponent}from './student-list/student-list.component'


const routes: Routes = [
  {path:"add",component:StudentAddComponent},
  {path:"list",component:StudentListComponent},
  {path:"edit/:id",component:StudentEditComponent},
  {path:"",component:StudentListComponent},
  {path:"details/:id",component:StudentDetailsComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
