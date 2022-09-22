import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevisionHistoryTrackChangeComponent } from './revision-history-track-change/revision-history-track-change.component';


const routes: Routes = [
  {
    path: '',
    component: RevisionHistoryTrackChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
