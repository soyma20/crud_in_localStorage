import {Injectable} from '@angular/core';

import {ICar} from "../interfaces/icar";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private storageService: StorageService) {
  }

  create(car: ICar): void {
    let id: number = 0;
    const cars = this.storageService.getCars();
    const last = cars.reverse()[0];
    if (last) id = last.id
    car.id = ++id
    cars.push(car)
    this.storageService.saveCars(cars);
  }

  readCars(): ICar[] {
    return this.storageService.getCars();
  }

  readCarById(id: number): ICar | undefined {
    return this.readCars().find((value) => value.id === id);
  }

  updateCar(car: ICar): void {
    const cars = this.storageService.getCars();
    cars.map((value, index) => {
      if (value.id === car.id) {
        cars.splice(index, 1, car)
      }
    })
    this.storageService.saveCars(cars)
  }

  deleteCar(id: number): void {
    const cars = this.storageService.getCars();
    cars.map((value, index) => {
      if (id === value.id) {
        cars.splice(index, 1)
      }
    })
    this.storageService.saveCars(cars)
  }

}
