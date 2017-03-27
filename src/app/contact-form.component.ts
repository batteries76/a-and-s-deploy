import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { ProductService }           from './product.service';

import { ContactMessage }           from './contact-message'

@Component({
  selector: 'my-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactFormComponent {

  myContactFormGroup: FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  message: AbstractControl;
  phoneNumber: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myContactFormGroup = fb.group({
      'name': ['ABC123', Validators.required],
      'email': ['a@b.com', Validators.required],
      'message': ['something is happening', Validators.required],
      'phoneNumber': [ '0412555888' ]
    });

    this.name = this.myContactFormGroup.controls['name'];
    this.email = this.myContactFormGroup.controls['email'];
    this.message = this.myContactFormGroup.controls['message'];
    this.phoneNumber = this.myContactFormGroup.controls['phoneNumber'];
  }

  onSubmit(form: any): void {
    console.log('You submitted value = ', form);

  }

}
