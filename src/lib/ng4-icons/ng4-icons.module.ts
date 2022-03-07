import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng4IconsComponent } from './ng4-icons.component';
import { IconModule } from '../ic-icon';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    MatIconModule,
  ],
  exports: [
    Ng4IconsComponent
  ],
  declarations: [
    Ng4IconsComponent
  ]
})
export class Ng4IconsModule { }