import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovementService } from 'src/app/movement.service';

@Component({
  selector: 'ab-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.css']
})
export class FormMovementComponent {

  maxDate = new Date(Date.now());

  ingresos = this.ms.getIngresos();

  gastos = this.ms.getGastos();

  movementForm = this.fb.group({
    fecha: [null, Validators.required],
    concepto: [null, Validators.required],
    importe: [null, Validators.required],
    tipo: ['ingreso', Validators.required],
    subtipo: [null, Validators.required],
    id: [this.ms.movementsList.length]
  });

  constructor(private fb: FormBuilder, private ms: MovementService) {}

  onSubmit() {
    this.ms.postMovement(this.movementForm.value);
  }

  isDirty(controlName: string) {
    return this.movementForm.controls[controlName].dirty;
  }
}
