import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  checked = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
