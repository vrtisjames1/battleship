import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component {
  // input current game data
  @Input() currentGame: any={};
  // export currentgame data
  @Output() newCurrentGame = new EventEmitter<any>();
  // boolean array for setting colors
  bool_array: boolean[]=[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]
  // variable array
  var_array: any=["a1","a2","a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "b1","b2","b3","b4", "b5", "b6", "b7", "b8", "b9", "b10", "c1","c2","c3","c4", "c5", "c6", "c7", "c8", "c9", "c10","d1","d2","d3","d4", "d5", "d6", "d7", "d8", "d9", "d10","e1","e2","e3","e4", "e5", "e6", "e7", "e8", "e9", "e10","f1","f2","f3","f4", "f5", "f6", "f7", "f8", "f9", "f10","g1","g2","g3","g4", "g5", "g6", "g7", "g8", "g9", "g10","h1","h2","h3","h4", "h5", "h6", "h7", "h8", "h9", "h10","i1","i2","i3","i4", "i5", "i6", "i7", "i8", "i9", "i10","j1","j2","j3","j4", "j5", "j6", "j7", "j8", "j9", "j10"]
  var_name: any = '';
  count: number = 0;
  message: string = 'Click on the board to place the number of ships as shown in the photo. The ships can only be placed vertically or horizontally--not diagonally! Once complete, press the "submit" button below';

  submit(){
    // reset count
    this.count = 0;
    // check for correct placement
    for(let i = 0; i < 100 ; i++){
      if(this.bool_array[i]===true){
        this.count = this.count + 1
      }
    }
    // if count doesn't equal 17 then success
    if(this.count!= 17){
      this.message = 'You have selected an incorrect amount of slots. Please check again'
    } else {
      this.message = '';
      // loop through and assign variables to current game
      for(let i = 0; i < 100 ; i++){
        if(this.bool_array[i] === true){
          this.var_name = this.var_array[i]
          this.currentGame = {...this.currentGame,
            [this.var_name]: 1
          }
        }
      }
      this.newCurrentGame.emit(this.currentGame)
    }
  }
}
