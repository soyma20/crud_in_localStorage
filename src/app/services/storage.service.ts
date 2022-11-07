import {Injectable} from '@angular/core';
import {ICar} from "../interfaces/icar";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  getCars(): ICar[] {
    const cars = localStorage.getItem("cars");
    if (!cars) return []
    return JSON.parse(cars)
  }

  saveCars(cars: ICar[]): void {
    localStorage.setItem("cars", JSON.stringify(cars))
  }
}
