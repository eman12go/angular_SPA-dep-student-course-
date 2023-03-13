import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from 'src/app/_module/course';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent {
  crs:Course=new Course(0,'',0,0);
  constructor(public  courseService:CourseService,public router:Router,private activateRoute:ActivatedRoute){}

  saveEdit(){
    this.courseService.edit(this.crs).subscribe(data=>{console.log(data)});

    this.router.navigateByUrl('/courses')
  }
  ngOnInit(){

    this.activateRoute.params.subscribe(data=>{
      // this.departmentService.edit(data['id']).subscribe(d=>{
      // console.log(d)
      this.courseService.getById(data['id']).subscribe(d=>{
        this.crs._id=d._id;
        this.crs.name=d.name;
        this.crs.rate=d.rate;
        this.crs.duration=d.duration;

      })
    })
     console.log(this.crs)
   }
}
