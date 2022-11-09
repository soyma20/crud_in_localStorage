import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {CarRoutingModule} from './car-routing.module';
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {UAHPipe} from './pipes/uah.pipe';
import {AgePipe} from './pipes/age.pipe';
import { CarUpdateFormComponent } from './components/car-update-form/car-update-form.component';


@NgModule({
  declarations: [
    CarDetailsComponent,
    UAHPipe,
    AgePipe,
    CarUpdateFormComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarModule {
}
