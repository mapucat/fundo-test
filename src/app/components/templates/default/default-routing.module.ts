import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';
import { DefaultComponent } from './default.component';


const defaultRoutes: Routes = [
  { 
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent, 
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(defaultRoutes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
