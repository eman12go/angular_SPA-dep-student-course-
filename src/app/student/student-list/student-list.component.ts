import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from 'src/app/_module/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers:[StudentService] // the same name
})
export class StudentListComponent {
  detailsID:number=0;
  deleteID:number=0;
  students:Student[]=[];
  std:Student=new Student (0,"",0,0,0)
  constructor(public  studentService:StudentService,public router:Router){}
  // to get data in students and use it in templete
  ngOnInit(){
    this.studentService.getAll( ).subscribe(a=>{
      this.students=a
    })
  }
  delete(id:number){
    if(confirm('Are you sure? ')){

      this.studentService.delete(id).subscribe(a=>{
        console.log(a);
      })
      let stdIndex=this.students.findIndex(obj=>obj._id==id);
      this.students.splice(stdIndex,1);
      this.router.navigateByUrl('/students')
    }
    }
    edit(id:number){
      this.router.navigateByUrl('/students/edit/'+id)

    }
}
