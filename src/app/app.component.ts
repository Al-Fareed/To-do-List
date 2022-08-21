import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  constructor(){
    setTimeout(() => {
      this.title="New Title"
    }, 2500);
  }
  color = "blue"
}
