import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  {path:"add",component:DepartmentAddComponent},
  {path:"list",component:DepartmentListComponent},
  {path:"edit/:id",component:DepartmentEditComponent},
  {path:"",component:DepartmentListComponent},
  {path:"details/:id",component:DepartmentDetailsComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
