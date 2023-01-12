import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() games: any[]=[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Output() selectedGame: EventEmitter<any> = new EventEmitter();
  currentGame: any={}={};

  delete(data: any){
    this.deleteEvent.emit(data)
  }

  select(id: number){
    this.currentGame = this.games.find((a) => {return a.id === id})
    this.selectedGame.emit(this.currentGame)
  }
}
