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


  clickEvent1(){
    this.selectedUser.emit(2)
  }

  clickEvent2(){
    this.selectedUser.emit(1)
  }

}

