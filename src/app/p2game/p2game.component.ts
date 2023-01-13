import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

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
  rules: string='(Rules: Select space on opponent board to fire a missle. Once fired, wait for opponent to make their turn. After each opponent turn, refresh the page with the button below.)'
  message: string=''

  ngOnInit(){
    this.message = this.currentGame.user2_turn === true ? 'Your Turn' : 'Opponent Turn'
  }

  ngOnChanges(changes: SimpleChanges){
    this.message = this.currentGame.user2_turn === true ? 'Your Turn' : 'Opponent Turn'

  }

  submit(data: any){

  }

  submit2(data: any){
    this.currentGame.user1_turn = true;
    this.currentGame.user2_turn = false;
    this.updateGame.emit(this.currentGame);
    this.message = 'Opponent Turn'
  }

  refresh(){
    this.refreshGame.emit();
    // this.message = this.currentGame.user2_turn === true ? 'Your Turn' : 'Opponent Turn'
  }
}
