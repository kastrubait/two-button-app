import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY, Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';
import { MrsoftData } from '../../models/mrsof-data.model';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  checked = false;
  result: string[] = [];
  dataSubscription!: Subscription;
  error = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
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
