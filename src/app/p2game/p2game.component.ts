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
   // output updated game
   @Output() refreshGame: EventEmitter<any> = new EventEmitter();

  message: string='Oppnent turn'

  submit(data: any){

  }

  submit2(data: any){
    this.currentGame.user1_turn = true;
    this.currentGame.user2_turn = false;
    this.updateGame.emit(this.currentGame);
    this.message = 'Opponent Turn'
  }

  submitNew(){
    this.refreshGame.emit();
  }
}
