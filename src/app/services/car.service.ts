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
    const cars = this.storageService.getCars();
    cars.push(car)
    this.storageService.saveCars(cars);
  }


}
