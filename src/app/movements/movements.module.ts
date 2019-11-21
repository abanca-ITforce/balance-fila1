import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [MovementsComponent],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MatTableModule
  ]
})
export class MovementsModule { }
