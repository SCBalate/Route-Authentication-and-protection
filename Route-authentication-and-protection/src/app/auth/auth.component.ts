import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

 
 Form!: FormGroup;
  loginMode:boolean = true;
  constructor(private fb:FormBuilder) { 
    this.createForm()
  }
  createForm(){
    this.Form = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  
  }

  onSwitchMode(){
    this.loginMode = !this.loginMode;
  }

  onSubmit(){
    if(this.Form.valid){
      console.log(this.Form.value);
    }else{  
    console.log('This form is invalid');
    
  }
}
}