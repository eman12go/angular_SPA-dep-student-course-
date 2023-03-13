import { Component ,Input, OnDestroy } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Department } from 'src/app/_module/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnDestroy{
  // @Input() id:number=0;
  dep:Department|null=new Department(0,'','');
  constructor(public  departmentService:DepartmentService,private activateRoute:ActivatedRoute){}

 sub:Subscription|null=null;
 ngOnInit(){
  //  this.sub= this.activateRoute.params.subscribe(a=>{ // كل مل تيجي داتا جديدة
  //    this.std=this.departmentService.getById(a['id'])
  //  })
  this.activateRoute.params.subscribe(data=>{
    this.departmentService.getById(data['id']).subscribe(d=>{
      this.dep=d;
    })
  })

   console.log(this.dep)
 }
 ngOnDestroy(){
   this.sub?.unsubscribe()
   console.log('destroy')
 }
}
