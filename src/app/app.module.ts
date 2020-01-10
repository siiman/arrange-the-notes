import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardEventsDirective } from './board/board-events.directive';
import { GameselectComponent } from './gameselect/gameselect.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardEventsDirective,
    GameselectComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }