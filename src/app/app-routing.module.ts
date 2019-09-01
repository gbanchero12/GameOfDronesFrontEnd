import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GambleComponent } from './gamble/gamble.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'gamble', component: GambleComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'register'}
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
