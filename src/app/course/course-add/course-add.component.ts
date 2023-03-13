import { Component,Output,Input, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import{Course} from 'src/app/_module/course'
import { CourseService } from 'src/app/_services/course.service';
// import{Student} from 'src/app/_module/student'


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
  // declare event
  // @Output() onCourseAdded:EventEmitter<Course>=new EventEmitter<Course>()
  crs:Course=  new Course(0,'',0,0);
  constructor(public courseService:CourseService,public router:Router){

  }
  save(){

    this.courseService.add(this.crs).subscribe(data=>console.log(data))
    // this.nCourse=  new Course(0,'',0,0)
    this.router.navigateByUrl('/courses')

  }
}
