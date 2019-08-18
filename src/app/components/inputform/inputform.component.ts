import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppStatus } from '../../enum';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss']
})
export class InputformComponent implements OnInit {
  playerName:string;
  constructor() {
    this.playerName="";
  }
  @Output() inputEvent = new EventEmitter();
  
  playerNameEvent() {
    
  }

  sendStatus() {
    this.inputEvent.emit({name: this.playerName, status: AppStatus.Game});
  }
  
  

  ngOnInit() {
    
  }

}
