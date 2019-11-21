import { Component, OnInit } from '@angular/core';

export interface MovementsElement {
  position: number;
  fecha: any;
  concepto: string;
  importe: number;
  id: number;
}

const elemntData: MovementsElement[] = [
  {position: 1, fecha: '14-10-2019', concepto: 'Café', importe: -1.50, id: 1},
  {position: 2, fecha: '20-10-2019', concepto: 'Lápices', importe: -1.50, id: 2},
  {position: 3, fecha: '31-10-2019', concepto: 'Chocolate', importe: -1.50, id: 3},
  {position: 4, fecha: '14-11-2019', concepto: 'Fideos', importe: -1.50, id: 4},
  {position: 5, fecha: '18-10-2019', concepto: 'Sueldo', importe: +100, id: 5},
];

@Component({
  selector: 'ab-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'fecha', 'concepto', 'importe', 'id'];
  dataSource = elemntData;

  constructor() { }

  ngOnInit() {
  }

}
