import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    RouterModule  // Certifique-se de usar forRoot()
  ],
})
export class HomeModule { }
