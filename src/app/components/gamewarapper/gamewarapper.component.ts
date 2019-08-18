import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppStatus } from '../../enum';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-gamewarapper',
  templateUrl: './gamewarapper.component.html',
  styleUrls: ['./gamewarapper.component.scss']
})


export class GamewarapperComponent implements OnInit {
  clickCounter:number;
  gameProgress:boolean;
  buttonTitle;
  form;
  @Input() data;
  @Output() resultEvent = new EventEmitter();



  constructor() {
    this.clickCounter=0;
    this.gameProgress=false;
    this.buttonTitle="Start";
  }

  

  ngOnInit() {
    this.form = new FormGroup({
      time: new FormControl(this.data.defaulttime),
    });
  }

  gameEvent(){
    if(!this.gameProgress && this.Timer.interval==null) {
      this.gameProgress=true;
      this.buttonTitle="Click";
      this.Timer.gametime=this.form.value.time;
      this.Timer.timerStart();
    } else {
      this.clickCounter++;
    }
  }

  Timer = {
    interval:null,
    gametime: null,
    timerStart:()=>{
      this.Timer.interval = setInterval(()=> { 
        (--this.Timer.gametime == 0) ? this.Timer.timerStop() : 0;
      }, 1000);
    },
    timerStop:()=>{
      clearInterval(this.Timer.interval);
      
      this.resultEvent.emit({
        status: AppStatus.End, 
        clickCount: this.clickCounter,
        defaulttime: this.form.value.time
      });
      
    }
  }
}
