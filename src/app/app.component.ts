import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'performance-appraisal-client';
  sideBarOpen = true;

  ngonit(){

  }
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}