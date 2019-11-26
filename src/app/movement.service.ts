import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  movementsList;

  constructor() {
    const temp = localStorage.getItem('movementsList');
    if (temp) {
      this.movementsList = JSON.parse(temp);
    } else {
      this.movementsList = [];
    }
  }

  getIngresos() {
    return [
      'Nómina',
      'Ventas',
      'Donaciones',
      'Otros'
    ];
  }

  getGastos() {
    return [
      'Hipoteca',
      'Gasolina',
      'Supermercado',
      'Otros'
    ];
  }

  postMovement(movement) {
    this.movementsList.push(movement);
    localStorage.setItem('movementsList', JSON.stringify(this.movementsList));
  }
}
