import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{RouterModule,Routes}from '@angular/router'
import { HomeComponent } from './home/home.component';
// import { StudentListComponent } from './student/student-list/student-list.component';
// import { CourseListComponent } from './course/course-list/course-list.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes:Routes=[
  {path:"home",component:HomeComponent},
  // {path:"students",component:StudentListComponent,children:[

  //   {path:"Add",component:StudentAddComponent},
  //   {path:"details/:id",component:StudentDetailsComponent},
  // ]},
  {path:"students",loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)},
  {path:"courses",loadChildren:()=>import('./course/course.module').then(m=>m.CourseModule)},
  {path:"departments",loadChildren:()=>import('./department/department.module').then(m=>m.DepartmentModule)},
  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"**",component:NotfoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
