import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor() { }

  getIngresos(){
    return [
      'nómina',
      'ventas',
      'donaciones',
      'otros'
    ];
  }

  getGastos(){
    return [
      'hipoteca',
      'gasolina',
      'supermercado',
      'otros'
    ];
  }

  postMovement(movement){
    alert(JSON.stringify(movement));
  }
}
