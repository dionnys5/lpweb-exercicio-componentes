import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() a = [2, 7];
  @Output() b = [-1, -5];
  @Output() m = null;

}
