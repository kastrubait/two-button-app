import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef;

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'тестовое задание' as string;
  }
}
