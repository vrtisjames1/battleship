import { Component ,Input, Output, EventEmitter ,ViewEncapsulation  } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class CreateComponent {
  // @Input('ngModel') model: any
  @Output() newGameEvent = new EventEmitter<any>();
  
  datagame_name='';
  datausername1='';
  datausername2='';

  addNewGame(){
    const game = {
      game_name: this.datagame_name,
      username1: this.datausername1,
      username2: this.datausername2
    }
    this.newGameEvent.emit(game)
  }
   
}
