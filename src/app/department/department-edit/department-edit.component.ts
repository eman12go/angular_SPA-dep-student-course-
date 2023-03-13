import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Department } from 'src/app/_module/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {
  dep:Department=new Department(0,'','');
  constructor(public  departmentService:DepartmentService,public router:Router,private activateRoute:ActivatedRoute){}

  saveEdit(){
    this.departmentService.edit(this.dep).subscribe(data=>{console.log(data)});
    // this.dep=new Department(0,'','');
    this.router.navigateByUrl('/departments')
  }
  ngOnInit(){

    this.activateRoute.params.subscribe(data=>{
      // this.departmentService.edit(data['id']).subscribe(d=>{
      // console.log(d)
      this.departmentService.getById(data['id']).subscribe(d=>{
        this.dep._id=d._id;
        this.dep.name=d.name;
        this.dep.location=d.location;

      })
    })
     console.log(this.dep)
   }
}

