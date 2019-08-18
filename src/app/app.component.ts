import { Component, OnInit, ViewChild } from '@angular/core';
import { AppStatus } from './enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClickerGame';
  Gamedata: {
    playername: string,
    defaulttime: number,
    appStatus: number,
    clickCount: number,
    times: any
  }

  constructor() {
    this.Gamedata = {
      playername: "",
      defaulttime: 30,
      clickCount: 0,
      appStatus: AppStatus.Pregame,
      times : [ 10, 30 ,60 ]
    }
  }

  receiveInput($event) {
    this.Gamedata.appStatus = $event.status; 
    this.Gamedata.playername = $event.name;
  }
  
  receiveResults($event) {
    this.Gamedata.appStatus = $event.status;     
    this.Gamedata.clickCount = $event.clickCount;     
    this.Gamedata.defaulttime = $event.defaulttime;   
  }

  receiveScoresEvent($event){
    this.Gamedata.appStatus = $event.status; 
  }
  
}
