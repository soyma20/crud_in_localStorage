import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {CarsRoutingModule} from './cars-routing.module';
import {CarFormComponent} from './components/car-form/car-form.component';
import {CarComponent} from "./components/car/car.component";
import {CarsComponent} from "./components/cars/cars.component";

@NgModule({
  declarations: [
    CarFormComponent,
    CarComponent,
    CarsComponent,
  ],
  exports: [
    CarFormComponent
  ],
  imports: [
        CommonModule,
        CarsRoutingModule,
        ReactiveFormsModule
    ]
})
export class CarsModule { }
