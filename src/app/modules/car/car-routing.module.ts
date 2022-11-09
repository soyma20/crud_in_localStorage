import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarDetailsComponent} from "./components/car-details/car-details.component";

const routes: Routes = [
  {path: '', component: CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {
}
