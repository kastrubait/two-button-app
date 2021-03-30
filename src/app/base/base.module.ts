import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BaseComponent } from './components/base/base.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [BaseComponent, FilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    BaseComponent,
    HttpClientModule,
  ],
})
export class BaseModule { }
