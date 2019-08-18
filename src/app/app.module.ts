import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputformComponent } from './components/inputform/inputform.component';
import { GamewarapperComponent } from './components/gamewarapper/gamewarapper.component';
import { ScoresComponent } from './components/scores/scores.component';


@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    GamewarapperComponent,
    ScoresComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
