import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ab-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.css']
})
export class FormMovementComponent {

  maxDate = new Date(Date.now());

  ingresos = [
    'nómina',
    'ventas',
    'donaciones',
    'otros'
  ];

  gastos = [
    'hipoteca',
    'gasolina',
    'supermercado',
    'otros'
  ];

  movementForm = this.fb.group({
    fecha: [null, Validators.required],
    concepto: [null, Validators.required],
    importe: [null, Validators.required],
    tipo: ['ingreso', Validators.required],
    subtipo: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert(JSON.stringify(this.movementForm.value));
  }

  isDirty(controlName: string) {
    return this.movementForm.controls[controlName].dirty;
  }
}
