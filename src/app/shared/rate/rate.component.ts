import { Component,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnChanges {
 @Input() rating:number=0;
 ratewidth:number=50;
 constructor(){
  console.log('constructor')
}
 ngOnChanges():void{
  this.ratewidth=this.rating*15;
 }
}
