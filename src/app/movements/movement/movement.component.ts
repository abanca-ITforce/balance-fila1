import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovementService } from 'src/app/movement.service';

@Component({
  selector: 'ab-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {
  movementId: string;
  movementDate: Date;
  movementConcept: string;
  movementAmount: number;
  movementType: string;
  movementSubtype: string;

  constructor(activatedRoute: ActivatedRoute, ms: MovementService) {
    this.movementId = activatedRoute.snapshot.params.id;
    this.movementDate = ms.movementsList[this.movementId.valueOf()].fecha;
    this.movementConcept = ms.movementsList[this.movementId.valueOf()].concepto;
    this.movementAmount = ms.movementsList[this.movementId.valueOf()].importe;
    this.movementType = ms.movementsList[this.movementId.valueOf()].tipo;
    this.movementSubtype = ms.movementsList[this.movementId.valueOf()].subtipo;
  }

  ngOnInit() {
  }

}
