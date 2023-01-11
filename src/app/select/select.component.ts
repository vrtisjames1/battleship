import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() games: any[]=[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  delete(data: any){
    this.deleteEvent.emit(data)
  }
}
