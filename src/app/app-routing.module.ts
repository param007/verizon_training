import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"add-schedule",component:AddScheduleComponent},
  {path:"display",component:DisplayComponent},
  {path:"search",component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
