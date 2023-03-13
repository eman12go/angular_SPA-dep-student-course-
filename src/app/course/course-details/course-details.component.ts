import { Component,Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Course} from 'src/app/_module/course'
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnChanges,OnInit {
  crs:Course=  new Course(0,'',0,0);

  constructor(public courseService:CourseService,private activeRoute:ActivatedRoute){
      // console.log('constructor')
    }

    ngOnInit() {
      // console.log('on init ')
      this.activeRoute.params.subscribe(data=>{
        this.courseService.getById(data['id']).subscribe(d=>{
          this.crs=d;
        })
      })
      console.log(this.crs);
    }
    ngOnChanges() {
      console.log('data change')
    }
}
