import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { BaseComponent } from './components/base/base.component';



@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    BaseComponent
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]

})
export class BaseModule { }
