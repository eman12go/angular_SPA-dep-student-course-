import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../_module/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl='http://localhost:8080/departments/';
   private department:Department[]=[
   ]
  constructor(public http:HttpClient) {
    this.http.get<Department[]>(this.baseUrl).subscribe(a=>{
      console.log(a);
    })
  }
  getAll(){
    return this.http.get<Department[]>(this.baseUrl);
  }//list

  add(dep:Department){
   return this.http.post<Department>(this.baseUrl,dep);
    // this.department.push(new Department(dep._id,dep.name,dep.location))
  }
  edit(dep:Department){
   return this.http.put(this.baseUrl+dep._id,dep); //url,dep

  }
  getById(id:number){
    return this.http.get<Department>(this.baseUrl+id);

  }// edite / details
  delete(id:number){
    return this.http.delete(this.baseUrl+id);

  console.log('deleted');
  }
}
