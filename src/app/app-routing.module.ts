import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GambleComponent } from './gamble/gamble.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path: 'gamble', component: GambleComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'gamble'}
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
