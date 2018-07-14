import { Component, OnInit } from '@angular/core';
import { userService } from '../user.service';
import { Card } from '../../card/card';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { promise } from 'protractor';
import { reject } from 'q';
import { resolve } from 'url';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user: User;
  sForm: FormGroup
  constructor(private fb: FormBuilder, private userservice: userService, private router: Router) {
    this.sForm = fb.group({
      fname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10), this.duplicatecheck],[this.duplicatecheckAsync]],
      lname: [],
      pwd: ['',[this.pwdvalidator]],
      confirmpwd:['',this.pwdmatch],  
      age: [],
      gender: [],
      address: fb.group({
      city: [],
      state: [],
      zip: []
      })
    });
  }
 get confirmpwd(){

  return this.sForm.controls.confirmpwd;
}
  get fname() {
    return this.sForm.controls.fname;
  }
  getlname() {
    return this.sForm.controls.lname;
  }
  get pwd() {
    return this.sForm.controls.pwd;
  }
  get address() {
    return this.sForm.controls.address;
  }


  pwdmatch(fc:FormControl):ValidationErrors{
    if(fc && (fc.value!==null || fc.value!==undefined)){
      const cpwd=fc.value;
      const epwd=fc.root.get('pwd');
      if(epwd){
        const passvalue=epwd.value;
        if(passvalue !==cpwd){
          return{invalidpwd:true};
        }
      }
    }
return null;
    
  }
pwdvalidator(fc:FormControl):ValidationErrors{
if(fc && (fc.value!==null || fc.value!==undefined)){

  const regex =new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$');
  if(!regex.test(fc.value)){


    return{invalidpwdv:true};
  }
}
  return null;
}


  duplicatecheck(fc: AbstractControl): ValidationErrors {
    const value: string = fc.value;
    if (value === 'abcd' ) {
      return { invalidName: true };
    }
    return null;
  }
  duplicatecheckAsync(fc: FormControl): Promise<ValidationErrors> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value: string = fc.value;
        if (value.startsWith('admin')) {
          return resolve({ adminpresent: true });
        }
        return resolve(null);
      }, 1000);
    });
  }



// pwdvalidator(fc:FormControl):ValidationErrors{

// const value :string =fc.value;
// if(value.("^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
// ))
//   return 




// }


  adduser(sForm) {
    console.log("hi");
    this.user = this.sForm.value;
    this.userservice.save(this.user);
    this.router.navigate(['userlist']);
  }
}
