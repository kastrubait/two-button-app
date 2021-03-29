import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BaseComponent,
    HttpClientModule
  ],
})
export class BaseModule { }
