import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DetailsComponent } from 'src/app/pages/details/details.component';



const defaultRoutes: Routes = [
  { 
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent, 
      },
      {
        path: ':id/details',
        component: DetailsComponent, 
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
