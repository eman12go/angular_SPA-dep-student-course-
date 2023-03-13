import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/_module/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
std:Student=new Student (0,"",0,0,0);
constructor(public studentService:StudentService,public router:Router,private activateRoute:ActivatedRoute){

}
saveEdit(){
  this.studentService.edit(this.std).subscribe(data=>{console.log(data)});
  // this.dep=new Department(0,'','');
  this.router.navigateByUrl('/students')
}
ngOnInit(){

  this.activateRoute.params.subscribe(data=>{
    // this.departmentService.edit(data['id']).subscribe(d=>{
    // console.log(d)
    this.studentService.getById(data['id']).subscribe(d=>{
      this.std._id=d._id;
      this.std.name=d.name;
      this.std.age=d.age;
      this.std.department=d.department;
      this.std.course=d.course;

    })
  })
   console.log(this.std)
 }

}
