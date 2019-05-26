import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { DifficultyGuard } from './board/difficulty.guard';
import { GameselectComponent } from './gameselect/gameselect.component';

const routes: Routes = [
  { path: '', redirectTo: '/gameselect', pathMatch: 'full'},
  { path: 'notes/:difficulty', component: BoardComponent, canActivate: [DifficultyGuard] },
  { path: 'gameselect', component: GameselectComponent },
  { path: '**', redirectTo: '/gameselect', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }