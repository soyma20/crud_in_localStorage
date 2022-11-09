import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: 'cars', pathMatch: 'full'},
    {path: 'cars', loadChildren: () => import('./modules').then(value => value.CarsModule)},
    {path: 'cars/:id', loadChildren: () => import('./modules').then(value => value.CarModule)},
  ]
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
