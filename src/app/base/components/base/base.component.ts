import { Component, OnDestroy } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY, Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';
import { MrsoftData } from '../../models/mrsof-data.model';
import { FilterParams } from '../../models/filter-params.model';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnDestroy {
  isChecked = false;
  inputValue = '';
  filterParams: FilterParams = {
    typeValue: '',
    value: '',
    register: false
  };
  result: string[] = [];
  dataSubscription!: Subscription;
  error = false;

  constructor(private dataService: DataService) {}

  onKey(event: Event): void {
    this.inputValue = (event.target as  HTMLInputElement).value;
  }

  onChangeRegister(event: Event): void{
    this.isChecked = (event.target as  HTMLInputElement).checked;
  }

  filterByLenght(): void {
    if (this.isNumeric(Number(this.inputValue))) {
      this.filterParams.typeValue = 'number';
      this.filterParams.value = Number(this.inputValue);
      this.filterParams.register = this.isChecked;
      console.log(this.inputValue, this.filterParams);
      this.getDataJson();
    } else {
      window.alert('Вероятно, выбрана не та кнопка?');
    }
  }

  filterByWords(): void {
    if (!this.isNumeric(Number(this.inputValue))) {
      this.filterParams.typeValue = 'string';
      this.filterParams.value = this.inputValue;
      this.filterParams.register = this.isChecked;
      console.log(this.inputValue, this.filterParams);
      this.getDataJson();
    } else {
      window.alert('Вероятно, выбрана не та кнопка?');
    }
  }

  isNumeric(val: string | number): boolean {
    if (typeof val === "number" && !Number.isNaN(val) && val !== Infinity && val !== -Infinity) {
      return true;
    }
    return false;
  }

  getDataJson(): void {
    this.dataSubscription = this.dataService.getData()
    .pipe(
      catchError((error) => {
        this.result = [];
        this.error = true;
        return EMPTY;
      })
    ).subscribe((results: MrsoftData): void => {
      this.result = results.data;
      console.log(this.result);
    })
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
