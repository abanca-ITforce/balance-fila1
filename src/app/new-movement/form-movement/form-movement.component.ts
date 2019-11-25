import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ab-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.css']
})
export class FormMovementComponent {

  maxDate = new Date(Date.now());

  movementForm = this.fb.group({
    fecha: [null, Validators.required],
    concepto: [null, Validators.required],
    importe: [null, Validators.required],
    tipo: ['ingreso', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert(JSON.stringify(this.movementForm.value));
  }
}
