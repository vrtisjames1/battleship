import { Component ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // export create game state 
  @Output() createState = new EventEmitter<any>();

  // change state of Create Game Input field 
  changeCreate(){
    this.createState.emit()
  }
}
