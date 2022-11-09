import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICar} from "../../../../interfaces/icar";
import {CarService} from "../../../../services/car.service";

@Component({
  selector: 'app-car-update-form',
  templateUrl: './car-update-form.component.html',
  styleUrls: ['./car-update-form.component.css']
})
export class CarUpdateFormComponent implements OnInit {
  form: FormGroup;
  carToSave: ICar;

  @Output()
  updateEmitter = new EventEmitter<boolean>();

  @Input()
  carToUpdate:ICar

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(this.carToUpdate.model, [Validators.minLength(3), Validators.maxLength(20)]),
      price: new FormControl(this.carToUpdate.price, [Validators.min(1), Validators.max(200000000)]),
      year: new FormControl(this.carToUpdate.year, [Validators.min(1900), Validators.max(2022)])
    })
  }

  saveCar(): void {
    this.carToSave = this.form.getRawValue();
    this.carToSave.id = this.carToUpdate.id
    this.carService.updateCar(this.carToSave)
    this.form.reset();
    this.updateEmitter.emit(false)
  }

}
