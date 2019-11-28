import { Component, OnInit } from '@angular/core';
import { MovementService } from '../movement.service';
import { Observable } from 'rxjs';

export interface MovementsElement {
  position: number;
  fecha: any;
  concepto: string;
  importe: number;
  id: number;
}

@Component({
  selector: 'ab-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'fecha', 'concepto', 'importe', 'id'];
  dataSource = this.ms.movementsList;
  movementsList$: Observable<any[]>;

  constructor(private ms: MovementService) {
    // console.log(this.ms.movementsList);
    this.movementsList$ = this.ms.getMovements$();
   }

  ngOnInit() {
  }

}
