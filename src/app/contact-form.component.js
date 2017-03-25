"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var ContactFormComponent = (function () {
    function ContactFormComponent(fb) {
        this.myContactFormGroup = fb.group({
            'name': ['ABC123', forms_1.Validators.required],
            'email': ['a@b.com', forms_1.Validators.required],
            'message': ['something is happening', forms_1.Validators.required],
            'phoneNumber': ['0412555888']
        });
        this.name = this.myContactFormGroup.controls['name'];
        this.email = this.myContactFormGroup.controls['email'];
        this.message = this.myContactFormGroup.controls['message'];
        this.phoneNumber = this.myContactFormGroup.controls['phoneNumber'];
    }
    ContactFormComponent.prototype.onSubmit = function (form) {
        console.log('You submitted value = ', form);
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'my-contact-form',
            templateUrl: 'app/contact-form.component.html',
            styleUrls: ['stylesheets/styles.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map