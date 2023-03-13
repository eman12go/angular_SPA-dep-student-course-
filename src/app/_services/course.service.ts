import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../_module/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl='http://localhost:8080/courses/';
  private course:Course[]=[
  ]
  constructor(public http:HttpClient) {
    this.http.get<Course[]>(this.baseUrl).subscribe(a=>{
      console.log("get data done");
      console.log(a);
    })
   }
   getAll(){
    return this.http.get<Course[]>(this.baseUrl);
   }
   getById(id:number){
    return this.http.get<Course>(this.baseUrl+id);
   }
   add(crs:Course){
    return this.http.post<Course>(this.baseUrl,crs);
   }
   delete(id:number){
    return this.http.delete<Course>(this.baseUrl+id);
    console.log("deleted "+id);
   }
   edit(crs:Course){
    return this.http.put(this.baseUrl+crs._id,crs);
    console.log("edite done  ");
   }
}
