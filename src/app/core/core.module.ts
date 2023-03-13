import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PanelComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    HeaderComponent,
    PanelComponent,
    FooterComponent
  ]
})
export class CoreModule { }
