import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Student } from '../_module/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl='http://localhost:8080/students/';

  private students:Student[]=[

  ]
  constructor(public http:HttpClient) {
    this.http.get<Student[]>(this.baseUrl).subscribe(a=>{
      console.log(a);
    })
  }
  getAll(){
    return this.http.get<Student[]>(this.baseUrl);
  }//list

  add(std:Student){
    return this.http.post<Student>(this.baseUrl,std);

  }
  edit(std:Student){
    return this.http.put(this.baseUrl+std._id,std);

   }
  getById(id:number){
    return this.http.get<Student>(this.baseUrl+id);
    // for(let i=0;i<=this.students.length;i++){
    //   if(this.students[i].id==id){
    //     console.log(this.students[i]);
    //     return this.students[i];
      // }

    // }
    // return null;
  }// edite / details
  delete(id:number){
    return this.http.delete(this.baseUrl+id);

    console.log('deleted');
  // let stdIndex=this.students.findIndex(obj=>obj.id==id);
  // console.log(this.students);
  // this.students.splice(stdIndex,1);
  // console.log(this.students);
  }

}
