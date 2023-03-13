import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/_module/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {
 dep:Department=new Department(0,'','');
  constructor(public  departmentService:DepartmentService,public router:Router){}
  // ngOnInit(){
  //   this.std=this.studentService.getAll( )
  // }
  save(){
    this.departmentService.add(this.dep).subscribe(data=>{console.log(data)});
    // this.dep=new Department(0,'','');
    this.router.navigateByUrl('/departments')
  }
}
