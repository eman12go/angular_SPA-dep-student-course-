import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import{Course} from 'src/app/_module/course'
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers:[CourseService]
})
export class CourseListComponent {
 courses:Course[]=[]
 detailsID:number=0;
 deleteID:number=0;
 crs:Course=new Course(0,'',0,0);

constructor(public  courseService:CourseService,public router:Router){}

ngOnInit(){
  this.courseService.getAll( ).subscribe(a=>{
    this.courses=a;
  })
}
// crsDetails:Course=new Course(0,'',0,0);
delete(id:number){
if(confirm('Are you Sure.....??')){
  this.courseService.delete(id).subscribe(a=>console.log(a))
}
let crsIndex=this.courses.findIndex(obj=>obj._id==id);
this.courses.splice(crsIndex,1);
this.router.navigateByUrl('/courses')
}
edit(id:number){
  this.router.navigateByUrl('/courses/edit/'+id)
}
}
