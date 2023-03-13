import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/_module/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  providers:[DepartmentService]

})
export class DepartmentListComponent {
detailsID:number=0;
  deleteID:number=0;
  departments:Department[]=[];
  dep:Department=new Department(0,'','');
  constructor(public  departmentService:DepartmentService,public router:Router){}
  // to get data in students and use it in templete
  ngOnInit(){
    this.departmentService.getAll( ).subscribe(a=>{
      this.departments=a;
    })
  }
  delete(id:number){
    if(confirm('Are you sure? ')){

      this.departmentService.delete(id).subscribe(a=>{
        console.log(a);
      })
      let stdIndex=this.departments.findIndex(obj=>obj._id==id);
      this.departments.splice(stdIndex,1);
      this.router.navigateByUrl('/departments')
    }
    }
    edit(id:number){
      this.router.navigateByUrl('/departments/edit/'+id)
      // this.departmentService.edit(id).subscribe(a=>{
      //   console.log(a);
        // this.dep=a

      // })
    }
}
