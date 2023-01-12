import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p1game',
  templateUrl: './p1game.component.html',
  styleUrls: ['./p1game.component.css']
})
export class P1gameComponent {
  @Input() currentGame: any={};

  message: string='Start Game! Select space on "Opponent Board" to launch your first missle!'

}
