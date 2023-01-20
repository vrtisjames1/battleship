import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component {
  // input current game data
  @Input() currentGame: any={};
  //input seelcted user
  @Input() userSelect: any={};
  // export currentgame data
  @Output() newCurrentGame = new EventEmitter<any>();
  // boolean array for setting colors
  bool_array: boolean[]=[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]
  // variable array
  var_array: any=["a1","a2","a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "b1","b2","b3","b4", "b5", "b6", "b7", "b8", "b9", "b10", "c1","c2","c3","c4", "c5", "c6", "c7", "c8", "c9", "c10","d1","d2","d3","d4", "d5", "d6", "d7", "d8", "d9", "d10","e1","e2","e3","e4", "e5", "e6", "e7", "e8", "e9", "e10","f1","f2","f3","f4", "f5", "f6", "f7", "f8", "f9", "f10","g1","g2","g3","g4", "g5", "g6", "g7", "g8", "g9", "g10","h1","h2","h3","h4", "h5", "h6", "h7", "h8", "h9", "h10","i1","i2","i3","i4", "i5", "i6", "i7", "i8", "i9", "i10","j1","j2","j3","j4", "j5", "j6", "j7", "j8", "j9", "j10"]
  var2_array: any=["a1_2","a2_2","a3_2", "a4_2", "a5_2", "a6_2", "a7_2", "a8_2", "a9_2", "a10_2", "b1_2","b2_2","b3_2","b4_2", "b5_2", "b6_2", "b7_2", "b8_2", "b9_2", "b10_2", "c1_2","c2_2","c3_2","c4_2", "c5_2", "c6_2", "c7_2", "c8_2", "c9_2", "c10_2","d1_2","d2_2","d3_2","d4_2", "d5_2", "d6_2", "d7_2", "d8_2", "d9_2", "d10_2","e1_2","e2_2","e3_2","e4_2", "e5_2", "e6_2", "e7_2", "e8_2", "e9_2", "e10_2","f1_2","f2_2","f3_2","f4_2", "f5_2", "f6_2", "f7_2", "f8_2", "f9_2", "f10_2","g1_2","g2_2","g3_2","g4_2", "g5_2", "g6_2", "g7_2", "g8_2", "g9_2", "g10_2","h1_2","h2_2","h3_2","h4_2", "h5_2", "h6_2", "h7_2", "h8_2", "h9_2", "h10_2","i1_2","i2_2","i3_2","i4_2", "i5_2", "i6_2", "i7_2", "i8_2", "i9_2", "i10_2","j1_2","j2_2","j3_2","j4_2", "j5_2", "j6_2", "j7_2", "j8_2", "j9_2", "j10_2"]
  var_name: any = '';
  count: number = 0;
  message: string = 'Click on the board to place the number of ships as shown in the photo. The ships may only be placed vertically or horizontally--not diagonally! Once complete, press the "submit" button below';

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
      // reset message
      this.message = '';
      // loop through and assign variables to current game
      if(this.userSelect === 1){
        for(let i = 0; i < 100 ; i++){
          if(this.bool_array[i] === true){
            this.var_name = this.var_array[i]
            this.currentGame = {...this.currentGame,
              [this.var_name]: 1
            }}}
      } else if (this.userSelect === 2){
        for(let i = 0; i < 100 ; i++){
          if(this.bool_array[i] === true){
            this.var_name = this.var2_array[i]
            this.currentGame = {...this.currentGame,
              [this.var_name]: 1
            }}}
      }
      }
      // emit message
      this.newCurrentGame.emit(this.currentGame)
    }

  }
