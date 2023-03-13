import { Component } from '@angular/core';
import { Student } from 'src/app/_module/student';
import{Router}from '@angular/router'
import { StudentService } from 'src/app/_services/student.service';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
  // providers:[StudentService]
})
export class StudentAddComponent {
  std:Student=new Student(0,'',0,0,0);
  constructor(public  studentService:StudentService,public router:Router){}
  // ngOnInit(){
  //   this.std=this.studentService.getAll( )
  // }
  save(){
     this.studentService.add(this.std).subscribe(data=>{console.log(data)});

    // this.std=new Student(0,'',0);
    this.router.navigateByUrl('/students')
  }
}
