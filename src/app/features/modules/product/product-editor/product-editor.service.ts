import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})

export class ProductEditorService {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      regular_price: ['', Validators.required],
      short_description: [''],
      description: [''],
      categories: [[]],
    });
  }

  initializeForm() {
    this.form = this.buildForm();
  }
  patchForm(data: IProduct) {
    this.form.patchValue(data);
  }
}
