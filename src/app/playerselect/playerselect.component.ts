import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-playerselect',
  templateUrl: './playerselect.component.html',
  styleUrls: ['./playerselect.component.css']
})
export class PlayerselectComponent {
  // input current game data
  @Input() currentGame: any={};
  // export currentgame data
  @Output() selectedUser = new EventEmitter<any>();

  // select username 1
  select1(){
    this.selectedUser.emit(1)
  }
// select username 2
  select2(){
    this.selectedUser.emit(2)
  }
}
