import {Component, DoCheck} from '@angular/core';

import {ICar} from "../../../../interfaces/icar";
import {CarService} from "../../../../services/car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements DoCheck {
  cars: ICar[]

  constructor(public carService: CarService) {
  }

  ngDoCheck(): void {
    this.cars = this.carService.readCars()
  }
}
