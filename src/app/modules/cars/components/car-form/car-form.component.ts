import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CarService} from "../../../../services/car.service";
import {ICar} from "../../../../interfaces/icar";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;
  carToSave: ICar;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.minLength(3), Validators.maxLength(20)]),
      price: new FormControl(null, [Validators.min(1), Validators.max(200000000)]),
      year: new FormControl(null, [Validators.min(1900), Validators.max(2022)])
    })
  }

  saveCar(): void {
    this.carToSave = this.form.getRawValue();
    this.carService.create(this.carToSave)
    this.form.reset()
  }

}
