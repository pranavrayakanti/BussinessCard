import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[LnameValidator][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: LnameValidatorDirective, multi: true}]
})
export class LnameValidatorDirective implements Validator {



validate(control:AbstractControl):ValidationErrors{

console.log(control.value);
return null;

}






  
  constructor() { }




}
