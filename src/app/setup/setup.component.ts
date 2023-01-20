import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent {

  @Output() sendResponse = new EventEmitter<any>();

  sendNo(){
    this.sendResponse.emit(1);
  }

  sendYes(){
    this.sendResponse.emit(2);
  }

}
