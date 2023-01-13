import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p1game',
  templateUrl: './p1game.component.html',
  styleUrls: ['./p1game.component.css']
})
export class P1gameComponent {
  // input current game data
  @Input() currentGame: any={};
  // output updated game
  @Output() updateGame: EventEmitter<any> = new EventEmitter();
  @Output() refreshGame: EventEmitter<any> = new EventEmitter();

  message: string='Start Game! Select space on "Opponent Board" to launch your first missle!'

  submit(data: any){

  }

  submit2(data: any){
    this.currentGame.user1_turn = false;
    this.currentGame.user2_turn = true;
    this.updateGame.emit(this.currentGame);
    this.message = 'Opponent Turn';
  }

  submitNew(){
    this.refreshGame.emit();
  }
}
