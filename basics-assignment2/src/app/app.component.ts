import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttonActive = false;
  username = '';
  
    constructor() {
     
  }
  
   if(this.username){
        this.buttonActive = true;
      }
  
    resetUsername() {
    this.username = '';
  }
  
}
