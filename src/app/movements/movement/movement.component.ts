import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ab-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {
  movementDescr: string;
  constructor(activatedRoute: ActivatedRoute) {
    this.movementDescr = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
  }

}
