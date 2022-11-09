import {Component, DoCheck} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

import {ICar} from "../../../../interfaces/icar";
import {CarService} from "../../../../services/car.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements DoCheck {
  id: number;
  car: ICar;
  update: boolean;

  constructor(private carService: CarService, private location: Location, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.id = +id)
  }

  ngDoCheck(): void {
    this.getCar();
  }

  getCar(): void {
    const carById = this.carService.readCarById(this.id);
    if (!carById) return;
    this.car = carById
  }

  updateCar(): void {
    this.update = true
  }

  catchUpdateEmitter($event: boolean): void {
    this.update = $event
  }
}
