import { Component,Input, OnDestroy } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Student } from 'src/app/_module/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnDestroy{
//  @Input() id:number=0;
 std:Student|null=new Student(0,'',0,0,0);
 constructor(public  studentService:StudentService,private activateRoute:ActivatedRoute){}
//  ngOnChanges(){
//   this.std=this.studentService.getById(this.id)
//  }
sub:Subscription|null=null;
ngOnInit(){
 this.activateRoute.params.subscribe(a=>{ // كل مل تيجي داتا جديدة
   this.studentService.getById(a['id']).subscribe(d=>{
    this.std=d;
   })
  })
  // this.std=this.studentService.getById(this.activateRoute.snapshot.params['id']) ;
  console.log(this.std)
}
ngOnDestroy(){
  this.sub?.unsubscribe()
  console.log('destroy')
}

}
