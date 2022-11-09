import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

import {ICar} from "../../../../interfaces/icar";
import {CarService} from "../../../../services/car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  car: ICar;

  constructor(private carService: CarService, private router: Router) {
  }

  delete():void  {
    this.carService.deleteCar(this.car.id)
  }

  details():void {
    this.router.navigate([`cars/${this.car.id}`])
  }
}
