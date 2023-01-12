import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p2game',
  templateUrl: './p2game.component.html',
  styleUrls: ['./p2game.component.css']
})
export class P2gameComponent {
  // input current game data
  @Input() currentGame: any={};
  // output updated game
  @Output() updateGame: EventEmitter<any> = new EventEmitter();

  message: string='Start Game! Select space on "Opponent Board" to launch your first missle!'

  submit(data: any){
    this.currentGame.user1_turn = true;
    this.currentGame.user2_turn = false;
  }

  submit2(data: any){
    this.updateGame.emit(this.currentGame);
  }
}
