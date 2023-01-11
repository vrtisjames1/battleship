import { Component ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // export create game state 
  @Input() showCreate: boolean;
  @Output() createState: EventEmitter<any> = new EventEmitter();
  @Output() selectState: EventEmitter<any> = new EventEmitter();

  // change state of Create Game Input field 
  changeCreate(){
    this.createState.emit()
  }

  changeSelect(){
    // console.log("hello")
    this.selectState.emit()
  }

}
