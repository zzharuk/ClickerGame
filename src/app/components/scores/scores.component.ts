import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppStatus } from '../../enum';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  @Input() data;
  constructor() { }
  @Output() scoresEvent = new EventEmitter();

  ngOnInit() {
  }

  appStatusPregame(){
    this.scoresEvent.emit({ status: AppStatus.Pregame });
  }

  appStatusGame(){
    this.scoresEvent.emit({ status: AppStatus.Game });
  }
}
